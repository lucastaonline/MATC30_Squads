from controllers import RankingController


def test_ordenar_e_rankear_deve_retornar_lista_ordenada_e_com_rank():
    """
    Testa se a função ordena corretamente os resultados pela nota (rating)
    em ordem decrescente e adiciona a chave 'rank' corretamente.
    """
    
    # Cria uma instância do controller e uma lista de resultados desordenada.
    controller = RankingController()
    resultados_desordenados = [
        {"name": "google.com", "rating": 8},
        {"name": "bing.com", "rating": 5},
        {"name": "uol.com.br", "rating": 10},
    ]

    
    # Chama o método para testar.
    resultados_processados = controller.ordenar_e_rankear(resultados_desordenados)

    
    # Verifica se o resultado está correto.
    assert len(resultados_processados) == 3
    # Verifica a ordem e o rank
    assert resultados_processados[0]['name'] == "uol.com.br"
    assert resultados_processados[0]['rank'] == 1
    assert resultados_processados[1]['name'] == "google.com"
    assert resultados_processados[1]['rank'] == 2
    assert resultados_processados[2]['name'] == "bing.com"
    assert resultados_processados[2]['rank'] == 3


def test_definir_status():
    """
    Testa a lógica de definição de status com base nas notas dos links.
    """
    
    controller = RankingController()
    
    resultados_ok = [{"rating": 10}, {"rating": 8}, {"rating": 7}]
    resultados_degraded = [{"rating": 9}, {"rating": 6}]
    resultados_down = [{"rating": 8}, {"rating": 3}]
    resultados_down_precedence = [{"rating": 6}, {"rating": 3}] 

    
    status_ok = controller.definir_status(resultados_ok)
    status_degraded = controller.definir_status(resultados_degraded)
    status_down = controller.definir_status(resultados_down)
    status_down_precedence_check = controller.definir_status(resultados_down_precedence)

    
    assert status_ok == "OK"
    assert status_degraded == "DEGRADED"
    assert status_down == "DOWN"
    assert status_down_precedence_check == "DOWN"