import requests
from urllib.parse import urlparse
import time
import statistics

class LinkService:
    @staticmethod
    def avaliar_link(url: str, tentativas=3) -> dict:
        criteria = {
            "performance": 0,
            "latency": 0,
            "throughput": 0,
            "timeouts": 0,
            "consistency": 0,
            "security": 0,
            "content": 0,
            "usability": 0,
            "reliability": 0,
            "headers_quality": 0,
            "rate_limit": 0,
            "response_size": 0
        }

        scheme = urlparse(url).scheme
        tempos = []
        tamanhos = []
        timeouts = 0
        responses = []

        for i in range(tentativas):
            try:
                start = time.time()
                response = requests.get(url, timeout=5)
                elapsed = time.time() - start
                tempos.append(elapsed)
                tamanhos.append(len(response.content))
                responses.append(response)
            except requests.Timeout:
                timeouts += 1
            except requests.RequestException:
                
                timeouts += 1

        # Performance: média dos tempos (quanto menor, melhor)
        if tempos:
            avg_time = sum(tempos) / len(tempos)
            if avg_time <= 0.1:
                criteria["performance"] = 10
            elif avg_time >= 1.0:
                criteria["performance"] = 0
            else:
                criteria["performance"] = round(10 * (1.0 - (avg_time - 0.1) / 0.9), 2)

            # Latency (TTFB): usando headers se possível, senão igual performance
            
            criteria["latency"] = criteria["performance"]

            # Consistência
            if len(tempos) > 1:
                desv = statistics.stdev(tempos)
                # Escala: desvio 0 = 10, desvio 1s+ = 0
                if desv >= 1.0:
                    criteria["consistency"] = 0
                else:
                    criteria["consistency"] = round(10 * (1.0 - desv / 1.0), 2)
            else:
                criteria["consistency"] = 10

            # Throughput: tamanho médio da resposta / tempo médio 
            avg_size = sum(tamanhos) / len(tamanhos) if tamanhos else 0
            throughput = avg_size / avg_time if avg_time > 0 else 0
           
            kb_per_s = throughput / 1024
            if kb_per_s >= 100:  # 100KB/s ou mais é nota máxima
                criteria["throughput"] = 10
            else:
                criteria["throughput"] = round(10 * (kb_per_s / 100), 2)

            # Response size (normalizada)
            if avg_size > 1024*1024:  # >1MB
                criteria["response_size"] = 5  # muito grande, penaliza um pouco
            elif avg_size < 100:  # muito pequeno, suspeito
                criteria["response_size"] = 2
            else:
                criteria["response_size"] = 10

        # Timeouts: penaliza quem falha mais
        criteria["timeouts"] = max(0, 10 - (timeouts * (10 / tentativas)))

        if responses:
            # Pega o último response válido para os outros critérios
            response = responses[-1]

            # Segurança: HTTPS + headers de segurança
            security_score = 0
            if scheme == 'https':
                security_score += 5
                headers = response.headers
                if 'Strict-Transport-Security' in headers:
                    security_score += 2
                if 'Content-Security-Policy' in headers:
                    security_score += 2
                if 'X-Content-Type-Options' in headers:
                    security_score += 1
            criteria["security"] = min(security_score, 10)

            # Confiabilidade (status code)
            status = response.status_code
            if status == 200:
                criteria["reliability"] = 10
            elif 200 <= status < 300:
                criteria["reliability"] = 8
            elif 300 <= status < 400:
                criteria["reliability"] = 6
            elif 400 <= status < 500:
                criteria["reliability"] = 2
            else:
                criteria["reliability"] = 0

            # Content-Type
            content_type = response.headers.get('Content-Type', '')
            if 'application/json' in content_type:
                criteria["content"] = 10
            elif 'text/' in content_type:
                criteria["content"] = 5
            else:
                criteria["content"] = 2

            # Usabilidade JSON
            try:
                data = response.json()
                if isinstance(data, dict) and len(data) >= 3:
                    criteria["usability"] = 10
                elif isinstance(data, list) and len(data) > 0:
                    criteria["usability"] = 7
                else:
                    criteria["usability"] = 4
            except:
                criteria["usability"] = 0

            # Headers: CORS, Cache-Control, etc
            headers = response.headers
            header_score = 0
            if 'Access-Control-Allow-Origin' in headers:
                header_score += 3
            if 'Cache-Control' in headers:
                header_score += 3
            if 'Content-Type' in headers:
                header_score += 2
            criteria["headers_quality"] = min(header_score, 10)

            # Rate Limit Headers
            rate_headers = ['X-RateLimit-Limit', 'X-RateLimit-Remaining', 'Retry-After']
            rate_score = 0
            for h in rate_headers:
                if h in headers:
                    rate_score += 3
            criteria["rate_limit"] = min(rate_score, 10)

        else:
            # Não houve respostas válidas
            criteria["security"] = 0
            criteria["reliability"] = 0
            criteria["content"] = 0
            criteria["usability"] = 0
            criteria["headers_quality"] = 0
            criteria["rate_limit"] = 0

        rating = round(sum(criteria.values()) / len(criteria), 2)
        return {
            "criteria": criteria,
            "rating": rating
        }
