from flask import Flask, jsonify
import pytest
from api import RankingAPI

# Simula o RankingController funcionando corretamente
class FakeControllerSucesso:
    def processar(self):
        return {"mensagem": "funcionou"}, None

# Simula o RankingController com erro
class FakeControllerErro:
    def processar(self):
        return None, "Erro simulado"

@pytest.fixture
def app():
    app = Flask(__name__)
    app.add_url_rule('/ranking', view_func=RankingAPI.as_view('ranking_api'))
    return app

@pytest.fixture
def client(app):
    return app.test_client()

def test_api_sucesso(monkeypatch, client):
    from api import RankingController
    monkeypatch.setattr('api.RankingController', lambda: FakeControllerSucesso())

    resposta = client.get('/ranking')
    assert resposta.status_code == 200
    assert resposta.get_json() == {"mensagem": "funcionou"}

def test_api_erro(monkeypatch, client):
    from api import RankingController
    monkeypatch.setattr('api.RankingController', lambda: FakeControllerErro())

    resposta = client.get('/ranking')
    assert resposta.status_code == 500
    assert resposta.get_json() == {"erro": "Erro simulado"}
