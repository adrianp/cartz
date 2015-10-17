const net = require('./net.js');

const playCard = (i) => {
	// player.play(i);
	console.log('playCard', i);
};

const placeCard = (i) => {
	// player.place(i);
	console.log('placeCard', i);
};

const attack = (i) => {
	console.log('attack', i);
};

const endTurn = () => {
	console.log('endTurn');
};

document.addEventListener('endTurn', endTurn);
document.addEventListener('attack', attack);
document.addEventListener('placeCard', placeCard);
document.addEventListener('playCard', playCard);

let currentState = {
	player: {
		hand: [],
		played: [],
		hp: 30,
		mana: 1
	},
	enemy: {
		hand: 3,
		played: [],
		hp: 30,
		mana: 1
	},
	turn: 'player'
};

const getCurrentState = () => {
	return currentState;
};

const stateChanged = new CustomEvent('stateChanged', {'detail': getCurrentState()});

const updateGameState = () => {
	document.dispatchEvent(stateChanged);

	net.getState().then((resp) => {
		console.log('state', resp);
		currentState = resp.state;
		document.dispatchEvent(stateChanged);
	});
};

module.exports.updateGameState = updateGameState;
