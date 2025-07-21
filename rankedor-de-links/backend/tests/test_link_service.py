import unittest
from unittest.mock import patch, Mock
import requests
from backend.service import LinkService

class TestLinkService(unittest.TestCase):

    @patch('backend.service.requests.get')
    def test_avaliar_link_sucesso(self, mock_get):
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.content = b'{"key": "value"}'
        mock_response.headers = {
            'Content-Type': 'application/json',
            'Strict-Transport-Security': 'max-age=31536000',
            'Content-Security-Policy': "default-src 'self'",
            'X-Content-Type-Options': 'nosniff',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache',
            'X-RateLimit-Limit': '100',
        }
        mock_response.json.return_value = {"a": 1, "b": 2, "c": 3}
        mock_get.return_value = mock_response
        resultado = LinkService.avaliar_link('https://example.com', tentativas=1)

        self.assertIn("rating", resultado)
        self.assertIn("criteria", resultado)
        self.assertEqual(resultado["criteria"]["security"], 10)
        self.assertEqual(resultado["criteria"]["usability"], 10)
        self.assertEqual(resultado["criteria"]["reliability"], 10)

    @patch('backend.service.requests.get')
    def test_avaliar_link_timeout(self, mock_get):
        mock_get.side_effect = requests.Timeout()

        resultado = LinkService.avaliar_link('https://example.com', tentativas=1)

        self.assertIn("rating", resultado)
        self.assertIn("criteria", resultado)
        self.assertLess(resultado["criteria"]["timeouts"], 10)
        self.assertEqual(resultado["criteria"]["reliability"], 0)
