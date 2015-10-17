import sys

from flask import Flask, request, jsonify
from flask_cors import CORS

from config import envs
from data.game import Game
from data.player import Player
from utils import random_string


app = Flask(__name__, static_url_path='')
CORS(app)

games = {}


@app.after_request
def apply_caching(response):
    response.headers["X-API-Version"] = "1.0.0"
    return response


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/api/newgame", methods=["POST"])
def new_game():
    id = request.json["id"]

    # if games does not exist, create id
    if id not in games:
        games[id] = Game(id)

    if games[id].getPlayerCount() < 2:
        player = Player(random_string(10))
        games[id].addPlayer = player
        return jsonify({
            "joined": True,
            "id": games[id].gameID,
            "player": player.playerID
        }), 200
    else:
        return jsonify({
            "joined": False,
            "id": id
        }), 403


@app.route("/api/stopgame", methods=["POST"])
def stop_game():
    id = request.json["id"]
    if id in games:
        del games[id]
        return "", 200
    else:
        return "", 404


if __name__ == "__main__":
    key = "dev"
    if len(sys.argv) > 1 and "prod" in sys.argv:
        key = "prod"

    app.run(host=envs[key]["host"], port=envs[key]["port"], debug=key == "dev")
