from flask import Flask, redirect
from api import RankingController

app = Flask(__name__)

app.add_url_rule('/ranking', view_func=RankingController.as_view('ranking_controller'))


# Rota raiz redireciona para /ranking
@app.route('/')
def index():
    return redirect('/ranking')

if __name__ == '__main__':
    app.run(debug=True)
