import pytest
from backend.main import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_index_redirect(client):
    response = client.get('/')
  
    assert response.status_code == 302
    assert response.headers['Location'].endswith('/ranking')

def test_ranking_endpoint(client):
    response = client.get('/ranking')

    assert response.status_code == 200
