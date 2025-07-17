import json
from urllib.parse import urlparse
from service import LinkService
from pathlib import Path

class RankingController:
    def __init__(self):
        filepath = Path(__file__).parent.parent / 'frontend' / 'links.json'
        
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
        for link_obj in links:
            url_string = link_obj['url']  
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
        reverse_order = (order == 'DESC')
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