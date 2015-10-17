const net = require('./net.js');
require('./firstPage.js');
require('./events.js');

net.joinGame('gigi').then((resp) => {
	if (resp.joined) {
		console.log('success joining game');
	} else {
		console.info('game already full');
	}
});
