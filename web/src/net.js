const host = 'http://192.168.2.121:8080';
const api = '/api/game/';

const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

const method = 'post';

const joinGame = (gameId) => {
	return new Promise((resolve, reject) => {
		fetch(host + api + 'new', {
			method,
			headers,
			body: JSON.stringify({id: gameId})
		})
		.then((response) => response.json(), reject)
		.then((body) => resolve(body), reject);
	});
};

const attack = (gameId, userId, attackerIndex, attackedIndex) => {
	fetch(host + api + 'playCard', {
		method,
		headers,
		body: JSON.stringify({
			id: gameId,
			player: userId,
			card: attackerIndex,
			target: attackedIndex
		})
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

const playCard = (gameId, userId, cardId) => {
	return new Promise((resolve, reject) => {
		fetch(host + api + 'play', {
			method,
			headers,
			body: JSON.stringify({
				id: gameId,
				player: userId,
				card: cardId
			})
		})
		.then((response) => {
			resolve(response);
		}, reject);
		// .then((body) => resolve(body), reject);
	});
};

const endTurn = (gameId, userId) => {
	return new Promise((resolve, reject) => {
		fetch(host + api + 'pass', {
			method,
			headers,
			body: JSON.stringify({id: gameId, player: userId})
		})
		.then((response) => resolve(response), reject);
	});
};

const getState = (gameId, userId) => {
	return new Promise((resolve, reject) => {
		fetch(host + api + 'state', {
			method,
			headers,
			body: JSON.stringify({id: gameId, player: userId})
		})
		.then((response) => response.json(), reject)
		.then((body) => resolve(body), reject);
	});
};

// // optional
// const getCurrentGames = () => {
//
// };

module.exports.attack = attack;
module.exports.endTurn = endTurn;
module.exports.playCard = playCard;
module.exports.getState = getState;
module.exports.joinGame = joinGame;
