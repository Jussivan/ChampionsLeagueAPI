let players = [
    { id: 1, name: 'Karim Benzema', teamId: 1, position: 'Forward' },
    { id: 2, name: 'Kevin De Bruyne', teamId: 2, position: 'Midfielder' }
    // ...outros jogadores...
];

exports.getAllPlayers = (req, res) => {
    res.json(players);
};

exports.getPlayerById = (req, res) => {
    const player = players.find(p => p.id == req.params.id);
    if (player) res.json(player);
    else res.status(404).json({ error: 'Player not found' });
};

exports.createPlayer = (req, res) => {
    const newPlayer = { id: players.length + 1, ...req.body };
    players.push(newPlayer);
    res.status(201).json(newPlayer);
};

exports.updatePlayer = (req, res) => {
    const idx = players.findIndex(p => p.id == req.params.id);
    if (idx !== -1) {
        players[idx] = { ...players[idx], ...req.body };
        res.json(players[idx]);
    } else {
        res.status(404).json({ error: 'Player not found' });
    }
};

exports.deletePlayer = (req, res) => {
    const idx = players.findIndex(p => p.id == req.params.id);
    if (idx !== -1) {
        players.splice(idx, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Player not found' });
    }
};
