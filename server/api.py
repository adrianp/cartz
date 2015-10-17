from data.game import Game
from data.player import Player
from utils import random_string
from config import uid_length


games = {}


def game_new(id):
    # if games does not exist, create id
    if id not in games:
        games[id] = Game(id)

    if games[id].getPlayerCount() < 2:
        player = Player(random_string(uid_length))
        games[id].addPlayer(player)
        return ({
            "joined": True,
            "id": games[id].id,
            "player": player.id,
            "started": games[id].started
        }, 200)
    else:
        return ({
            "joined": False,
            "id": id
        }, 403)


def game_stop(id):
    if id in games:
        del games[id]
        return ("", 200)
    else:
        return ("", 404)


def game_state(id, player):
    if id in games:
        return (games[id].get_state(player), 200)
    else:
        return ("", 404)


def game_pass(id, user):
    if id in games:
        games[id].next()
        return ("", 200)
    else:
        return ("", 404)


def game_play(id, user, card):
    if id in games:
        if games[id].play(user, card):
            return ("", 200)
        else:
            return ("", 403)
    return ("", 404)


def game_attack(id, user, card, target):
    return ("", 501)
