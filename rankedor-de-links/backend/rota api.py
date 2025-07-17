from flask.views import MethodView
import time
import requests
from flask import jsonify
from controllers import RankingController


# --- Classe auxiliar para desempate por tempo de resposta ---
class _TieBreakerService:
    @staticmethod
    def get_elapsed_time(url: str) -> float:
        try:
            start_time = time.time()
            requests.get(url, timeout=3)
            return time.time() - start_time
        except requests.RequestException:
            return float('inf')


# --- API que retorna a melhor API, com critério de desempate por tempo ---
class TopApisAPI(MethodView):
    def get(self):
        controller = RankingController()
        resultado, erro = controller.processar()

        if erro:
            return jsonify({"erro": str(erro)}), 500

        apis = resultado.get("data", [])
        if not apis:
            return '', 204 

        maior_rating = apis[0]['rating']
        finalistas = [api for api in apis if api['rating'] == maior_rating]

        if len(finalistas) == 1:
            return jsonify(finalistas[0]), 200

        vencedora_final = None
        menor_tempo = float('inf')

        for api in finalistas:
            tempo_atual = _TieBreakerService.get_elapsed_time(api['url'])
            if tempo_atual < menor_tempo:
                menor_tempo = tempo_atual
                vencedora_final = api

        if vencedora_final is None:
            vencedora_final = finalistas[0]

        return jsonify(vencedora_final), 200

