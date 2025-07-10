import requests
from urllib.parse import urlparse
import time

class LinkService:
    @staticmethod
    def avaliar_link(url: str) -> dict:
        criteria = {
            "performance": 0,
            "security": 0,
            "content": 0,
            "usability": 0,
            "responsiveness": 0,
            "reliability": 0
        }

        # Security: HTTPS?
        criteria["security"] = 10 if urlparse(url).scheme == 'https' else 0

        try:
            start = time.time()
            response = requests.get(url, timeout=5)
            elapsed = time.time() - start

            # Performance (nota inversa do tempo, até um limite)
            criteria["performance"] = max(0, round(10 / (elapsed + 0.001), 2))

            # Responsiveness = performance
            criteria["responsiveness"] = criteria["performance"]

            # Reliability (status HTTP 200)
            criteria["reliability"] = 10 if response.status_code == 200 else 0

            # Content: verifica se Content-Type JSON
            content_type = response.headers.get('Content-Type', '')
            criteria["content"] = 10 if 'application/json' in content_type else 0

            # Usability: tenta parsear JSON (simplificado)
            try:
                response.json()
                criteria["usability"] = 10
            except:
                criteria["usability"] = 0

        except requests.RequestException:
            # Em caso de erro, todas as notas continuam zero
            pass

        rating = round(sum(criteria.values()) / len(criteria), 2)

        return {
            "criteria": criteria,
            "rating": rating
        }
