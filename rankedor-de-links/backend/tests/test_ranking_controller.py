import unittest
from backend.controllers import RankingController

class TestRankingController(unittest.TestCase):

    def test_definir_status_ok(self):
        controller = RankingController()
        dados = [
            {"rating": 8},
            {"rating": 7},
            {"rating": 9}
        ]
        resultado = controller.definir_status(dados)
        self.assertEqual(resultado, "OK")

    def test_definir_status_degraded(self):
        controller = RankingController()
        dados = [
            {"rating": 6},
            {"rating": 8},
            {"rating": 7}
        ]
        resultado = controller.definir_status(dados)
        self.assertEqual(resultado, "DEGRADED")

    def test_definir_status_down(self):
        controller = RankingController()
        dados = [
            {"rating": 3},
            {"rating": 5},
            {"rating": 6}
        ]
        resultado = controller.definir_status(dados)
        self.assertEqual(resultado, "DOWN")

    def test_ordenar_e_rankear(self):
        controller = RankingController()
        dados = [
            {"rating": 5},
            {"rating": 9},
            {"rating": 7}
        ]
        resultado = controller.ordenar_e_rankear(dados)
        self.assertEqual(resultado[0]['rating'], 9)
        self.assertEqual(resultado[0]['rank'], 1)
        self.assertEqual(resultado[2]['rank'], 3)

if __name__ == '__main__':
    unittest.main()
