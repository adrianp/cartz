import sys

from flask import Flask, request, jsonify

from config import envs


app = Flask(__name__, static_url_path='')
games = {}


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/api/newgame", methods=["POST"])
def new_game():
    id = request.form["id"]

    # if games does not exist, create id
    if id not in games:
        games[id] = {"players": 0, "id": id}

    noPlayers = games[id]["players"]

    if noPlayers < 2:
        games[id]["players"] += 1
        return jsonify({"joined": True, "id": id}), 200
    else:
        return jsonify({"joined": False, "id": id}), 403

if __name__ == "__main__":
    key = "dev"
    if len(sys.argv) > 1 and "prod" in sys.argv:
        key = "prod"

    app.run(host=envs[key]["host"], port=envs[key]["port"], debug=key == "dev")
