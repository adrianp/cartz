const net = require('./net.js');

let gameId = '';
let userId = '';
const init = (id, uId) => {
	gameId = id;
	userId = uId;
};

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

const updateGameState = () => {
	net.getState(gameId, userId).then((state) => {
		currentState = state;
		const stateEv = new CustomEvent('stateChanged', {'detail': state});
		document.dispatchEvent(stateEv);
	});
};

module.exports.init = init;
module.exports.updateGameState = updateGameState;
