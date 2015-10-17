const net = require('./net.js');
const ui = require('./ui.js');

document.getElementById('play').addEventListener('click', () => {
	const gameName = document.getElementById('gameName').value;
	net.joinGame(gameName).then((resp) => {
		if (resp.joined) {
			console.log('success joining game:' + gameName);
			ui.createGameZone();
		} else {
			console.info('game already full');
		}
	});
});
