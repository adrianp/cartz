const net = require('./net.js');
require('./events.js');

console.log('bubu');
net.joinGame('gigi').then((resp) => {
	if (resp.joined) {
		console.log('success joining game');
	} else {
		console.info('game already full');
	}
});