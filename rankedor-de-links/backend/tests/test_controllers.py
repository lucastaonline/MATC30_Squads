import pytest
from controllers import RankingController


@pytest.fixture
def controller():
    """Retorna uma instância de RankingController para ser usada nos testes."""
    return RankingController()


def test_ordenar_e_rankear_retorna_lista_ordenada_e_com_rank(controller):
    """
    Testa se a função ordena corretamente os resultados pela nota (rating)
    em ordem decrescente e adiciona a chave 'rank' corretamente.
    """
    # Arrange: Define os dados de entrada e o resultado esperado.
    resultados_desordenados = [
        {"name": "google.com", "rating": 8},
        {"name": "bing.com", "rating": 5},
        {"name": "uol.com.br", "rating": 10},
    ]
    resultado_esperado = [
        {"name": "uol.com.br", "rating": 10, "rank": 1},
        {"name": "google.com", "rating": 8, "rank": 2},
        {"name": "bing.com", "rating": 5, "rank": 3},
    ]

    # Act: Chama o método que está sendo testado.
    resultados_processados = controller.ordenar_e_rankear(resultados_desordenados)

    # Assert: Verifica se o resultado é o esperado.
    assert resultados_processados == resultado_esperado


@pytest.mark.parametrize("ratings_entrada, status_esperado", [
    ([{"rating": 10}, {"rating": 8}, {"rating": 7}], "OK"),
    ([{"rating": 9}, {"rating": 6}], "DEGRADED"),
    ([{"rating": 8}, {"rating": 3}], "DOWN"),
    ([{"rating": 6}, {"rating": 3}], "DOWN"),  # Testa a precedência do status DOWN
])
def test_definir_status(controller, ratings_entrada, status_esperado):
    """Testa a lógica de definição de status com base em diferentes listas de notas."""
    status_calculado = controller.definir_status(ratings_entrada)
    assert status_calculado == status_esperado