from flask.views import MethodView
<<<<<<< Updated upstream
from flask import jsonify
from controllers import RankingController
=======
from flask import jsonify, request
from services.ranking_service import RankingService
>>>>>>> Stashed changes

# a classe rankingController atua como a camada de API (Controller)
class RankingController(MethodView):
    def get(self):
<<<<<<< Updated upstream
        controller = RankingController()
        resultado, erro = controller.processar()
        if erro:
            return jsonify({"erro": erro}), 500
        return jsonify(resultado), 200
=======
        order = request.args.get('order', 'DESC').upper()
        if order not in ['ASC', 'DESC']:
            order = 'DESC'

        service = RankingService()
        resultado, erro = service.processar(order=order)
        
        if erro:
            return jsonify({"erro": erro}), 500
        
        return jsonify(resultado), 200
>>>>>>> Stashed changes
