const net = require('./net.js');


let cs = {
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


let gameId = '';
let userId = '';
const init = (id, uId) => {
	gameId = id;
	userId = uId;
};

const updateGameState = () => {
	net.getState(gameId, userId).then((state) => {
		cs = state;
		const stateEv = new CustomEvent('stateChanged', {'detail': state});
		document.dispatchEvent(stateEv);
	});
};

const playCard = (cardId) => {
	if (cs.turn === 'player' && cs.player.hand.some((card) => card.id === cardId)) {
		net.playCard(gameId, userId, cardId).then((resp) => {
			console.log('playCard', resp);
			updateGameState();
		});
	}
};

const attack = (cardId, targetId) => {
	if (cs.turn === 'player' && cs.player.played.some((card) => card.id === cardId)) {
		net.attack(gameId, userId, cardId, targetId).then((resp) => {
			console.log('attack', resp);
			updateGameState();
		});
	}
};

const endTurn = () => {
	if (cs.turn === 'player') {
		net.endTurn(gameId, userId).then((resp) => {
			console.log('endTurn', resp);
			updateGameState();
		});
	}
};

document.addEventListener('endTurn', endTurn);
document.addEventListener('attack', attack);
document.addEventListener('playCard', playCard);


module.exports.init = init;
module.exports.updateGameState = updateGameState;
