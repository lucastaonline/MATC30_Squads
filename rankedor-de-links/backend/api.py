from flask.views import MethodView
from controllers import RankingController
import os
from flask import Flask, jsonify



app = Flask(_name_)  

LINKS_PATH = os.path.join(os.path.dirname(_file_), 'models', 'data', 'links.json')

@app.route('/ranking', methods=['GET'])
def obter_ranking():
    controller = RankingController(filepath=LINKS_PATH)
    resultado, erro = controller.processar()

    if erro:
        return jsonify({'erro': erro}), 500

    return jsonify(resultado), 200