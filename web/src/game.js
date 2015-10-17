const playerReady = new Event('playerReady');

const init = () => {
	const player = new Player();
	player.init();

	document.dispatchEvent(playerReady);
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


const updateGameState = (state) => {

};

const state = {
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
