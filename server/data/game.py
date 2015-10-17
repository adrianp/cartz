from collections import OrderedDict


class Game:
    def __init__(self, gameID):
        self.players = OrderedDict()
        self.id = gameID
        self.currentPlayer = 0
        self.started = False

    def start(self):
        for _, player in self.players.iteritems():
            player.draw(3)

    def getPlayerCount(self):
        return len(self.players.keys())

    def addPlayer(self, player):
        self.players[player.id] = player
        if len(self.players.items()) == 2:
            self.started = True
            self.start()

    def next(self):
        if self.getPlayerCount() == 2:
            self.currentPlayer = (self.currentPlayer + 1) % 2

    def play(self, user, card):
        return self.players[user].play(card)

    def get_state(self, player):
        currentPlayer = self.players.items()[self.currentPlayer][0]
        return {
            "id": self.id,
            "player": self.players[player].get_state(True),
            "enemy": self.players[player].get_state(False),
            "turn": currentPlayer
        }
