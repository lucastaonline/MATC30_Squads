
import json
import time
import requests
from urllib.parse import urlparse
from flask import Flask, jsonify
from flask.views import MethodView

# -------- SERVIÇO DE AVALIAÇÃO --------
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

        elapsed = float('inf')