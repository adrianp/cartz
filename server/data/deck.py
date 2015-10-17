import random

from card import Card


class Deck:
    def __init__(self):
        self.cards = [
            Card("a", 1, 1, 1, {'charge': True}),
            Card("b", 2, 1, 1),
            Card("c", 1, 2, 1),
            Card("d", 3, 2, 2),
            Card("e", 2, 3, 2),
            Card("f", 2, 2, 2, {'positive': True}),
            Card("g", 3, 4, 3),
            Card("h", 4, 3, 3),
            Card("i", 2, 5, 3),
            Card("j", 5, 2, 3, {'charge': True}),
            Card("k", 4, 4, 3, {'negative': True}),
            Card("l", 3, 3, 3, {'positive': True}),
            Card("m", 4, 4, 4),
            Card("n", 5, 3, 4),
            Card("o", 2, 6, 4),
            Card("p", 5, 5, 5),
            Card("q", 8, 2, 5),
            Card("r", 4, 6, 5),
            Card("s", 6, 6, 6),
            Card("t", 5, 5, 6, {'positive': True})
        ]

    def pick(self, count, max_cost):
        pool = []
        for card in self.cards:
            if card.cost <= max_cost:
                pool.append(card)
        return random.sample(pool, count)

    def remove(self, card):
        self.cards.remove(card)
