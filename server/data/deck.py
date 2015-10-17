from card import Card


class Deck:
    def __init__(self):
        self.card = [
            Card(1, 1, 1, 'charge'),
            Card(2, 1, 1),
            Card(1, 2, 1),
            Card(3, 2, 2),
            Card(2, 3, 2),
            Card(2, 2, 2, 'positive'),
            Card(3, 4, 3),
            Card(4, 3, 3),
            Card(2, 5, 3),
            Card(5, 2, 3, 'charge'),
            Card(4, 4, 3, 'negative'),
            Card(3, 3, 3, 'positive'),
            Card(4, 4, 4),
            Card(5, 3, 4),
            Card(2, 6, 4),
            Card(5, 5, 5),
            Card(8, 2, 5),
            Card(4, 6, 5),
            Card(6, 6, 6),
            Card(5, 5, 6, 'positive')
        ]

        def pick():
            raise NotImplementedError
