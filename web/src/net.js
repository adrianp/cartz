const host = 'http://192.168.2.121:8080';

const newGame = (gameId) => {
	fetch(host + '/api/newgame', {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id: gameId
		})
	})
	.then((response) => {
		return response.json();
	})
	.then((body) => {
		console.log(body);
	});
};

module.exports.newGame = newGame;
