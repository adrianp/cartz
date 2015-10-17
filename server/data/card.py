from utils import random_string


class Card:
    def __init__(self, name, attack, defense, cost, special=None):
        self.id = random_string(20)
        self.attack = attack
        self.defense = defense
        self.cost = cost
        self.name = name

        if special is None:
            self.special = special
        else:
            self.special = {}

    def get_state(self):
        return {
            "id": self.id,
            "attack": self.attack,
            "defense": self.defense,
            "cost": self.cost,
            "name": self.name
        }
