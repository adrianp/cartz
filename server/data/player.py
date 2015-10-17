from deck import Deck


class Player:
    def __init__(self, id):
        self.id = id
        self.deck = Deck()
        self.hand = []
        self.played = []
        self.hp = 30
        self.mana = 1

    def draw(self, count=1):
        picked = self.deck.pick(count, self.mana)
        for card in picked:
            self.hand.append(card)
            self.deck.remove(card)

    def get_state(self, me):
        hand = map(lambda card: card.get_state(), self.hand)
        if not me:
            hand = len(hand)

        r = {
            "hand": hand,
            "played": self.played,
            "hp": self.hp,
            "mana": self.mana
        }

        if me:
            r["id"] = self.id

        return r

