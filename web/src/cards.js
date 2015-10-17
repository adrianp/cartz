class Card {
	// attack
	// defense
	// cost
	// special
	constructor(a, d, c, s) {
		this.a = a;
		this.d = d;
		this.c = c;
		this.s = s;
		this.hp = d;
	}

	damage(amount) {
		this.hp -= amount;
		if (this.hp < 0) {
			this.dead = true;
		}
	}
}

const A1 = new Card(1, 1, 1, 'charge');
const B1 = new Card(2, 1, 1);
const C1 = new Card(1, 2, 1);

const A2 = new Card(3, 2, 2);
const B2 = new Card(2, 3, 2);
const C2 = new Card(2, 2, 2, 'positive');

const A3 = new Card(3, 4, 3);
const B3 = new Card(4, 3, 3);
const C3 = new Card(2, 5, 3);
const D3 = new Card(5, 2, 3, 'charge');
const E3 = new Card(4, 4, 3, 'negative');
const F3 = new Card(3, 3, 3, 'positive');

const A4 = new Card(4, 4, 4);
const B4 = new Card(5, 3, 4);
const C4 = new Card(2, 6, 4);

const A5 = new Card(5, 5, 5);
const B5 = new Card(8, 2, 5);
const C5 = new Card(4, 6, 5);

const A6 = new Card(6, 6, 6);
const B6 = new Card(5, 5, 6, 'positive');

const cards = [A1, B1, C1, A2, B2, C2, A3, B3, C3, D3, E3, F3, A4, B4, C4, A5, B5, C5, A6, B6];
module.exports.cards = cards;
