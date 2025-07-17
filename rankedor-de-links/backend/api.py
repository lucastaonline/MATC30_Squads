from flask.views import MethodView
from flask import jsonify, request
from controllers import RankingController


class RankingAPI(MethodView):
    def get(self):
        order = request.args.get('order', 'DESC').upper()
        if order not in ['ASC', 'DESC']:
            order = 'DESC'

        controller = RankingController()
        resultado, erro = controller.processar(order=order)

        if erro:
            return jsonify({"erro": erro}), 500
           
        return jsonify(resultado), 200