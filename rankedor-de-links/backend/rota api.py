from flask.views import MethodView
from flask import jsonify
from controllers import RankingController

class TopApisAPI(MethodView):
    def get(self):
        controller = RankingController()
        resultado, erro = controller.processar()
        
        if erro:
            return jsonify({"erro": erro}), 500

        apis = resultado.get("data", [])
        if not apis:
            return jsonify({}), 200

        top_api = apis[0]
        return jsonify(top_api), 200