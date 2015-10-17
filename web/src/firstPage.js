const net = require('./net.js');
const ui = require('./ui.js');

document.getElementById('play').addEventListener('click', () => {
    const gameName = document.getElementById('gameName').value;
    net.newGame(gameName);
    ui.createGameZone();
});
