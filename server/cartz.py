import subprocess
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
gitSHA = subprocess.check_output(["git", "rev-parse", "HEAD"]).strip()


@app.after_request
def apply_caching(response):
    response.headers["X-API-Version"] = gitSHA
    return response


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/api/game/new", methods=["POST"])
def game_new():
    id = request.json["id"]

    # if games does not exist, create id
    if id not in games:
        games[id] = Game(id)

    if games[id].getPlayerCount() < 2:
        player = Player(random_string(10))
        games[id].addPlayer(player)
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


@app.route("/api/game/stop", methods=["POST"])
def game_stop():
    id = request.json["id"]
    if id in games:
        del games[id]
        return "", 200
    else:
        return "", 404


@app.route("/api/game/state", methods=["GET"])
def game_state():
    id = request.args["id"]
    if id in games:
        return jsonify({
            "id": id,
            "current": games[id].players.items()[games[id].currentPlayer][0]
        }), 200
    else:
        return "", 404


@app.route("/api/game/next", methods=["POST"])
def game_next():
    id = request.json["id"]
    if id in games:
        games[id].next()
        return jsonify({
            "id": id,
            "current": games[id].players.items()[games[id].currentPlayer][0]
        }), 200
    else:
        return "", 404


@app.route("/api/game/play", methods=["POST"])
def game_play():
    gameID = request.json["id"]
    cardID = request.json["card"]
    return 501


@app.route("/api/game/attack", methods=["POST"])
def game_attack():
    id = request.json["id"]
    card = request.json["card"]
    target = request.json["target"]
    return 501


if __name__ == "__main__":
    key = "dev"
    if len(sys.argv) > 1 and "prod" in sys.argv:
        key = "prod"

    app.run(host=envs[key]["host"], port=envs[key]["port"], debug=key == "dev")
