
import json
import time
import requests
from urllib.parse import urlparse
from flask import Flask, jsonify
from flask.views import MethodView

# -------- SERVIÇO DE AVALIAÇÃO --------
class LinkService:
    @staticmethod
    def avaliar_link(url: str) -> dict:
        criteria = {
            "performance": 0,
            "security": 0,
            "content": 0,
            "usability": 0,
            "responsiveness": 0,
            "reliability": 0
        }

        elapsed = float('inf')

        # Segurança: usa HTTPS?
        criteria["security"] = 10 if urlparse(url).scheme == 'https' else 0

        try:
            start = time.time()
            response = requests.get(url, timeout=5)
            elapsed = time.time() - start

            criteria["performance"] = max(0, round(10 / (elapsed + 0.001), 2))
            criteria["responsiveness"] = criteria["performance"]
            criteria["reliability"] = 10 if response.status_code == 200 else 0

            content_type = response.headers.get('Content-Type', '')
            criteria["content"] = 10 if 'application/json' in content_type else 0

            try:
                response.json()
                criteria["usability"] = 10
            except:
                criteria["usability"] = 0

        except requests.RequestException:
            pass  # Tudo já está como 0

        rating = round(sum(criteria.values()) / len(criteria), 2)

        return {
            "criteria": criteria,
            "rating": rating,
            "elapsed": round(elapsed, 3)
        }

# -------- CONTROLADOR --------
class RankingController:
    def __init__(self, filepath='links.json'):
        self.filepath = filepath
        self.service = LinkService()

    def carregar_links(self):
        try:
            with open(self.filepath, 'r') as f:
                return json.load(f), None
        except Exception as e:
            return None, str(e)

    def avaliar_links(self, links):
        resultados = []
        for url in links:
            aval = self.service.avaliar_link(url)
            name = urlparse(url).netloc
            resultados.append({
                "name": name,
                "url": url,
                "criteria": aval['criteria'],
                "rating": aval['rating'],
                "elapsed": aval['elapsed']
            })
        return resultados

    def ordenar_e_rankear(self, resultados):
        resultados.sort(key=lambda x: x['rating'], reverse=True)
        for i, item in enumerate(resultados, start=1):
            item['rank'] = i
        return resultados

    def processar(self):
        links, erro = self.carregar_links()
        if erro:
            return None, f"Erro ao carregar links: {erro}"

        avaliados = self.avaliar_links(links)
        ranqueados = self.ordenar_e_rankear(avaliados)
        return {"data": ranqueados}, None

# -------- API FLASK --------
app = Flask(__name__)

class TopApisAPI(MethodView):
    def get(self):
        controller = RankingController()
        resultado, erro = controller.processar()
        if erro:
            return jsonify({"erro": erro}), 500

        apis = resultado["data"]
        if not apis:
            return jsonify([]), 200

        maior_rating = max(api["rating"] for api in apis)
        empatadas = [api for api in apis if api["rating"] == maior_rating]
        vencedora = min(empatadas, key=lambda x: x.get("elapsed", float('inf')))

        return jsonify(vencedora), 200

# Rota para testar todas (opcional)
class AllRankingAPI(MethodView):
    def get(self):
        controller = RankingController()
        resultado, erro = controller.processar()
        if erro:
            return jsonify({"erro": erro}), 500
        return jsonify(resultado), 200

# Registra as rotas
app.add_url_rule('/top-apis', view_func=TopApisAPI.as_view('top_apis'))
app.add_url_rule('/ranking', view_func=AllRankingAPI.as_view('all_ranking'))

@app.route('/')
def index():
    return jsonify({
        "rotas_disponiveis": ["/ranking", "/top-apis"]
    })

if __name__ == '__main__':
    app.run(debug=True)
