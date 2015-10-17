const conf = require('./conf.js');

class Deck {
	constructor(cards) {
		this.cards = cards;
	}

	draw(costLimit) {
		let i = 0;
		if (!costLimit) {
			costLimit = conf.maxCost;
		}
		do {
			i = Math.random() * this.cards.length;
		} while (this.cards[i].c > costLimit)

		return this.cards.splice(i, 1);
	}
}

module.exports.Deck = Deck;
