const net = require('./net.js');
const game = require('./game.js');
const ui = require('./ui.js');

document.getElementById('gameName').focus();

const newGame = () => {
	const gameName = document.getElementById('gameName').value;
	net.joinGame(gameName).then((resp) => {
		if (resp.joined) {
			console.log('success joining game:' + gameName);
			ui.createGameZone();
			game.init(resp.id, resp.player);
			game.updateGameState();
		} else {
			console.info('game already full');
		}
	});
};

document.addEventListener('keypress', (e) => {
	if (e.keyCode === 13) {
		newGame();
	}
});

document.getElementById('play').addEventListener('click', newGame);
