const endTurn = new Event('endTurn');
const attack = new Event('attack');
const placeCard = new Event('placeCard');
const playCard = new Event('playCard');
const playerReady = new Event('playerReady');

module.exports.endTurn = endTurn;
module.exports.attack = attack;
module.exports.placeCard = placeCard;
module.exports.playCard = playCard;
module.exports.playerReady = playerReady;
