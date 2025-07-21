import unittest
from unittest.mock import patch
from backend.api import RankingAPI
from flask import Flask

class TestRankingAPI(unittest.TestCase):

    def setUp(self):
        # Arrange: cria app e adiciona rota
        self.app = Flask(__name__)
        self.app.add_url_rule('/ranking', view_func=RankingAPI.as_view('ranking_api'))
        self.client = self.app.test_client()

    @patch('backend.api.RankingController')
    def test_get_success(self, MockController):
        # Arrange
        mock_instance = MockController.return_value
        mock_instance.processar.return_value = ({
            "status": "OK",
            "data": [{"url": "http://teste.com", "rating": 8}]
        }, None)

        # Act
        response = self.client.get('/ranking')

        # Assert
        self.assertEqual(response.status_code, 200)
        self.assertIn("status", response.json)
        self.assertEqual(response.json["status"], "OK")

    @patch('backend.api.RankingController')
    def test_get_error(self, MockController):
        # Arrange
        mock_instance = MockController.return_value
        mock_instance.processar.return_value = (None, "Arquivo não encontrado")

        # Act
        response = self.client.get('/ranking')

        # Assert
        self.assertEqual(response.status_code, 500)
        self.assertIn("erro", response.json)
        self.assertEqual(response.json["erro"], "Arquivo não encontrado")

if __name__ == '__main__':
    unittest.main()
