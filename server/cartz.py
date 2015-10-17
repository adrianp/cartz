import subprocess
import sys

from flask import Flask, request, jsonify
from flask_cors import CORS

import api
from config import envs


app = Flask(__name__, static_url_path='')
CORS(app)

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
    r = api.game_new(request.json['id'])
    return jsonify(r[0]), r[1]


@app.route("/api/game/stop", methods=["POST"])
def game_stop():
    return api.game_stop(request.json['id'])


@app.route("/api/game/state", methods=["POST"])
def game_state():
    r = api.game_state(request.json['id'], request.json['player'])
    return jsonify(r[0]), r[1]


@app.route("/api/game/pass", methods=["POST"])
def game_pass():
    return api.game_pass(request.json['id'], request.json['user'])


@app.route("/api/game/play", methods=["POST"])
def game_play():
    return api.game_play(
        request.json['id'],
        request.json['user'],
        request.json['card']
    )


@app.route("/api/game/attack", methods=["POST"])
def game_attack():
    return api.game_attack(
        request.json['id'],
        request.json['user'],
        request.json['card'],
        request.json['target']
    )


if __name__ == "__main__":
    key = "dev"
    if len(sys.argv) > 1 and "prod" in sys.argv:
        key = "prod"

    app.run(host=envs[key]["host"], port=envs[key]["port"], debug=key == "dev")
