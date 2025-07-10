from flask import Flask, redirect
from api import RankingAPI

app = Flask(__name__)

app.add_url_rule('/ranking', view_func=RankingAPI.as_view('ranking_api'))

# Rota raiz redireciona para /ranking
@app.route('/')
def index():
    return redirect('/ranking')

if __name__ == '__main__':
    app.run(debug=True)
