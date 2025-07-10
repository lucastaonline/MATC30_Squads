from flask.views import MethodView
from flask import jsonify
from controllers import RankingController


class RankingAPI(MethodView):
    def get(self):
        controller = RankingController()
        resultado, erro = controller.processar()
        if erro:
            return jsonify({"erro": erro}), 500
        return jsonify(resultado), 200
