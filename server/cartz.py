import sys

from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import string

from config import envs
from data.player import Player


app = Flask(__name__, static_url_path='')
CORS(app)
games = {}


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/api/newgame", methods=["POST"])
def new_game():
    id = request.json["id"]

    # if games does not exist, create id
    if id not in games:
        games[id] = {"players": {}, "id": id}

    noPlayers = len(games[id]["players"].keys())

    if noPlayers < 2:
        player = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(10))
        games[id]["players"][player] = Player(player)
        return jsonify({"joined": True, "id": id, "player": player}), 200
    else:
        return jsonify({"joined": False, "id": id}), 403

if __name__ == "__main__":
    key = "dev"
    if len(sys.argv) > 1 and "prod" in sys.argv:
        key = "prod"

    app.run(host=envs[key]["host"], port=envs[key]["port"], debug=key == "dev")
