const dom = require('./DOMaker.js');
const events = require('./events.js');

export class Card {
	constructor() {
		//
	}

    addCard(cardInfos, opponent, battlefield) {
        //
		console.log(cardInfos);
		const card = dom({
			'type': 'div',
			'attributes': {
				'class': 'card' +
					(opponent === true ? 'flipped' : '')
			},
			'content': [
				dom({
					'type': 'div',
					'attributes': {
						'class': 'mana'
					},
					'content': 'ceva'
				}),
				dom({
					'type': 'div',
					'attributes': {
						'class': 'attack'
					},
					'content': 'ceva'
				}),
				dom({
					'type': 'div',
					'attributes': {
						'class': 'defense'
					},
					'content': 'ceva'
				})
			]
		});

		let wrapper = null;

		if (opponent && battlefield) {
			wrapper = document.getElementById('opponentBattlefieldCardsWrapper');
		} else if (opponent) {
			wrapper = document.getElementById('opponentCardsWrapper');
		} else if (battlefield) {
			wrapper = document.getElementById('heroBattlefieldCardsWrapper');
		} else {
			wrapper = document.getElementById('heroCardsWrapper');
		}

		wrapper.appendChild(card);

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
			// opponent player details wrapper
			dom({
				'type': 'div',
				'attributes': {
					'class': 'player-wrapper opponent'
				},
				'content': [
					dom({
						'type': 'div',
						'attributes': {
							'class': 'player-details'
						},
						'content': [
							dom({
								'type': 'p',
								'attributes': {
									'id': 'opponentMana',
									'class': 'mana'
								}
							}),
							dom({
								'type': 'p',
								'attributes': {
									'id': 'opponentLife',
									'class': 'life'
								}
							})
						]
					}),
					dom({
						'type': 'div',
						'attributes': {
							'id': 'opponentCardsWrapper',
							'class': 'cards-wrapper'
						}
					})
				]
			}),
			// battlefield wrapper
			dom({
				'type': 'div',
				'attributes': {
					'class': 'battlefield'
				},
				'content': [
					dom({
						'this': 'div',
						'attributes': {
							'id': 'opponentBattlefieldCardsWrapper',
							'class': 'cards-wrapper'
						}
					}),
					dom({
						'this': 'div',
						'attributes': {
							'id': 'heroBattlefieldCardsWrapper',
							'class': 'cards-wrapper'
						}
					})
				]
			}),
			// my hero details wrapper
			dom({
				'type': 'div',
				'attributes': {
					'class': 'player-wrapper hero'
				},
				'content': [
					dom({
						'type': 'div',
						'attributes': {
							'class': 'player-details'
						},
						'content': [
							dom({
								'type': 'p',
								'attributes': {
									'id': 'heroMana',
									'class': 'mana'
								}
							}),
							dom({
								'type': 'p',
								'attributes': {
									'id': 'heroLife',
									'class': 'life'
								}
							})
						]
					}),
					dom({
						'type': 'div',
						'attributes': {
							'id': 'heroCardsWrapper',
							'class': 'cards-wrapper'
						}
					})
				]
			})
		]
	});

	document.body.appendChild(arena);
	document.body.className += 'slide';
};

const updateUi = (state) => {
	// parcurge state si deseneaza ui-ul in functie de ce contine state
};

document.addEventListener('playerReady', (state) => {
	updateUi(state);
});

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
