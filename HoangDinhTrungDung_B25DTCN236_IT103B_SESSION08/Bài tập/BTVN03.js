const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper",
];

function PlayersByPosition(position, players) {
    return players.filter(function(player) {
        let playerPosition = player.split(" - ")[1];
        return playerPosition === position;
    });
}

console.log(PlayersByPosition("Midfielder", players));
console.log(PlayersByPosition("Forward", players));