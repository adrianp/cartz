from collections import OrderedDict


class Game:
    def __init__(self, gameID):
        self.players = OrderedDict()
        self.gameID = gameID
        self.currentPlayer = 0

    def getPlayerCount(self):
        return len(self.players.keys())

    def addPlayer(self, player):
        self.players[player.playerID] = player

    def next(self):
        if self.getPlayerCount() == 2:
            self.currentPlayer = (self.currentPlayer + 1) % 2
