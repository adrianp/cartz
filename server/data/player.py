from deck import Deck


class Player:
    def __init__(self, playerID):
        self.playerID = playerID
        self.deck = Deck()
