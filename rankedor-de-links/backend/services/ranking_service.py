import json
from urllib.parse import urlparse
from pathlib import Path
import sys

#seção adicionada para corrigir um ImportError sem precisar criar arquivos de init
# ela adiciona o back ao caminho de busca do python
backend_path = str(Path(__file__).parent.parent)
if backend_path not in sys.path:
    sys.path.append(backend_path)

from service import LinkService  

class RankingService:
    def __init__(self):
        filepath = Path(__file__).parent.parent.parent / 'frontend' / 'links.json'
        
        self.filepath = filepath
        self.service = LinkService()

    def carregar_links(self):
        try:
            with open(self.filepath, 'r', encoding='utf-8') as f:
                return json.load(f), None
        except Exception as e:
            return None, str(e)

    def avaliar_links(self, links):
        resultados = []
        for link_obj in links:
            url_string = link_obj.get('url')
            if not url_string:
                continue
            
            aval = self.service.avaliar_link(url_string)
            name = urlparse(url_string).netloc
            resultados.append({
                "name": name,
                "url": url_string,
                "criteria": aval['criteria'],
                "rating": aval['rating']
            })
        return resultados

    def ordenar_e_rankear(self, resultados, order='DESC'):
        reverse_order = (order.upper() == 'DESC')
        resultados.sort(key=lambda x: x['rating'], reverse=reverse_order)
        
        for i, item in enumerate(resultados, start=1):
            item['rank'] = i
        return resultados

    def definir_status(self, resultados):
        status = "OK"
        for item in resultados:
            if item['rating'] < 4:
                return "DOWN"
            elif item['rating'] < 7 and status != "DOWN":
                status = "DEGRADED"
        return status

    def processar(self, order='DESC'):
        links, erro = self.carregar_links()
        if erro:
            return None, f"Falha ao ler {self.filepath}: {erro}"

        resultados = self.avaliar_links(links)
        resultados = self.ordenar_e_rankear(resultados, order)
        status = self.definir_status(resultados)

        return {
            "status": status,
            "data": resultados
        }, None