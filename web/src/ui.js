const dom = require('./DOMaker.js');
const events = require('./events.js');

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

// document.getElementById('endTurn').addEventListener('click', () => {
//     document.dispatchEvent(events.endTurn);
// });
// 
// document.getElementById('attack').addEventListener('click', () => {
//     document.dispatchEvent(events.attack);
// });
// 
// document.getElementById('placeCard').addEventListener('click', () => {
//     document.dispatchEvent(events.placeCard);
// });
// 
// document.getElementById('playCard').addEventListener('click', () => {
//     document.dispatchEvent(events.playCard);
// });

module.exports.createGameZone = createGameZone;
