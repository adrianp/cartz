const dom = require('./DOMaker.js');

document.addEventListener('stateChanged', (e) => {
	console.log('e', e.detail);
	updateUi(e.detail);
});

const genericCard = {
	"attack": 1,
	"cost": 1,
	"defense": 1,
	"id": "",
	"name": "b"
};

const addCard = (opponent, battlefield, cardInfo = genericCard) => {
	// console.log(cardInfo.id);
	const card = dom({
		'type': 'div',
		'attributes': {
			'class': 'card' +
				(opponent === true ? ' flipped' : ''),
			'style': `background-image: url("img/cards/${cardInfo.name}.png")`
		},
		'content': [
			dom({
				'type': 'div',
				'attributes': {
					'class': 'mana'
				},
				'content': cardInfo.cost
			}),
			dom({
				'type': 'div',
				'attributes': {
					'class': 'attack'
				},
				'content': cardInfo.attack
			}),
			dom({
				'type': 'div',
				'attributes': {
					'class': 'defense'
				},
				'content': cardInfo.defense
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

};

const removeCard = () => {
	//
}


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
	for(let playerHand of state.player.hand) {
	    addCard(false, false, playerHand);
	}
	for(let playerPlayed of state.player.played) {
	    addCard(false, true, playerPlayed);
	}
	for(let enemyPlayed of state.enemy.played) {
	    addCard(true, true, enemyPlayed);
	}
	for (let i = 0; i < state.enemy.hand; i++) {
		addCard(true, false);
	}
	document.getElementById('heroLife').textContent = state.player.hp;
	document.getElementById('opponentLife').textContent = state.enemy.hp;
	document.getElementById('heroMana').textContent = state.player.mana;
	document.getElementById('opponentMana').textContent = state.enemy.mana;
};


// document.getElementById('endTurn').addEventListener('click', () => {
// 	document.dispatchEvent(new Event('endTurn'));
// });
//
// document.getElementById('attacker').addEventListener('click', () => {
// 	document.dispatchEvent(new Event('attack', {'detail': index}));
// });
//
// document.getElementById('attacked').addEventListener('click', () => {
// 	document.dispatchEvent(new Event('attack', {'detail': index}));
// });
//
// document.getElementById('placeCard').addEventListener('click', () => {
// 	document.dispatchEvent(new Event('placeCard', {'detail': index}));
// });
//
// document.getElementById('playCard').addEventListener('click', () => {
// 	document.dispatchEvent(new Event('playCard', {'detail': index}));
// });

module.exports.createGameZone = createGameZone;
