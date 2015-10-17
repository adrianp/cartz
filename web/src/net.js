const host = 'http://192.168.2.121:8080';

const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

const method = 'post';

const joinGame = (gameId) => {
	return new Promise((resolve, reject) => {
		fetch(host + '/api/game/new', {
			method,
			headers,
			body: JSON.stringify({id: gameId})
		})
		.then((response) => response.json(), reject)
		.then((body) => resolve(body), reject);
	});
};

const attack = (attackerIndex, attackedIndex) => {
	fetch(host + '/api/playCard', {
		method,
		headers,
		body: JSON.stringify({attackerIndex, attackedIndex})
	})
	.then((response) => {
		return response.json();
	}, (err) => {
		console.log('err', err);
	})
	.then((body) => {
		console.log(body);
	});
};

const playCard = (index) => {
	fetch(host + '/api/playCard', {
		method,
		headers,
		body: JSON.stringify({index})
	})
	.then((response) => {
		return response.json();
	})
	.then((body) => {
		console.log(body);
	});
};

const endTurn = () => {
	fetch(host + '/api/endTurn')
	.then((response) => {
		return response.json();
	})
	.then((body) => {
		console.log(body);
	});
};

const getState = () => {
	fetch(host + '/api/getState')
	.then((response) => {
		return response.json();
	})
	.then((body) => {
		console.log(body);
	});
};

// optional
const getCurrentGames = () => {

};

module.exports.joinGame = joinGame;
