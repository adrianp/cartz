const dom = require('./DOMaker.js');

export class Card {
	constructor() {
		//
	}

    addCard() {
        //
		const card = dom({

		});

		document.body.appendChild(card);
    }

    removeCard() {
        //
    }
}

module.exports.Card = Card;


const createGameZone = () => {
	const arena = dom({
		'type': 'div',
		'attributes': {
			'class': 'arena'
		},
		'content': [
			dom({
				'type': 'div',
				'attributes': {
					'class': 'player-wrapper opponent'
				}
			}),
			dom({
				'type': 'div',
				'attributes': {
					'class': 'battlefield'
				}
			}),
			dom({
				'type': 'div',
				'attributes': {
					'class': 'player-wrapper me'
				}
			})
		]
	});

	document.body.appendChild(arena);
	document.body.className += 'slide';
};

module.exports.createGameZone = createGameZone;
