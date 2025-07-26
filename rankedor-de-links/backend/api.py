from flask.views import MethodView
from flask import jsonify, request
from services.ranking_service import RankingService

class RankingController(MethodView):
    def get(self):
        # Captura o parâmetro de ordenação da URL, com 'DESC' como padrão.
        order = request.args.get('order', 'DESC').upper()
        if order not in ['ASC', 'DESC']:
            order = 'DESC'

        # Instancia e chama a camada de serviço, que contém a lógica de negócio.
        service = RankingService()
        resultado, erro = service.processar(order=order)
        
        # Retorna o resultado (ou um erro) no formato JSON.
        if erro:
            return jsonify({"erro": erro}), 500
        
        return jsonify(resultado), 200