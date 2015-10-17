class Game:
    def __init__(self, gameID):
        self.players = {}
        self.gameID = gameID

    def getPlayerCount(self):
        return len(self.players.keys())

    def addPlayer(self, player):
        self.players[player.playerID] = player
