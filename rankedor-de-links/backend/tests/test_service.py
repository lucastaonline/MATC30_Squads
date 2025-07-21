import pytest
from service import LinkService

def test_output_structure():
    resultado = LinkService.avaliar_link("https://httpbin.org/json", tentativas=1)
    assert isinstance(resultado, dict)
    assert "criteria" in resultado
    assert "rating" in resultado

def test_rating_range():
    resultado = LinkService.avaliar_link("https://httpbin.org/json", tentativas=1)
    assert 0 <= resultado["rating"] <= 10

def test_criteria_keys():
    resultado = LinkService.avaliar_link("https://httpbin.org/json", tentativas=1)
    expected_keys = {
        "performance", "timeouts", "consistency", "security", "content",
        "usability", "reliability", "headers_quality", "rate_limit", "response_size"
    }
    assert set(resultado["criteria"].keys()) == expected_keys

def test_invalid_url_timeout():
    resultado = LinkService.avaliar_link("https://invalid-url-teste-12345.com", tentativas=1)
    assert isinstance(resultado, dict)
    assert 0 <= resultado["rating"] <= 10