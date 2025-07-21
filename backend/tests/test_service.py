import unittest
from unittest.mock import patch, Mock
from service import LinkService

class TestLinkService(unittest.TestCase):
    
    @patch('service.requests.get')
    def test_avaliar_link_com_sucesso(self, mock_get):
        # ARRANGE
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.content = b'{"msg":"ok","data":123}'
        mock_response.headers = {
            "Content-Type": "application/json",
            "Strict-Transport-Security": "max-age=63072000",
            "Content-Security-Policy": "default-src https:",
            "X-Content-Type-Options": "nosniff",
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "no-cache",
            "X-RateLimit-Limit": "60",
        }
        mock_response.json.return_value = {"msg": "ok", "data": 123}
        
        mock_get.return_value = mock_response

        # ACT
        resultado = LinkService.avaliar_link("https://exemplo.com", tentativas=2)

        # ASSERT
        self.assertIsInstance(resultado, dict)
        self.assertIn("criteria", resultado)
        self.assertIn("rating", resultado)
        self.assertGreaterEqual(resultado["rating"], 0)
        self.assertLessEqual(resultado["rating"], 10)

    @patch('service.requests.get')
    def test_avaliar_link_timeout(self, mock_get):
        # ARRANGE
        mock_get.side_effect = Exception("Timeout")

        # ACT
        resultado = LinkService.avaliar_link("https://exemplo.com", tentativas=2)

        # ASSERT
        self.assertEqual(resultado["criteria"]["timeouts"], 0)
        self.assertLess(resultado["rating"], 5)

if __name__ == '__main__':
    unittest.main()
