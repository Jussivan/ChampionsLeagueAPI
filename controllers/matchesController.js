let matches = [
    { id: 1, homeTeamId: 1, awayTeamId: 2, homeGoals: 2, awayGoals: 1, date: '2024-05-01' }
    // ...outras partidas...
];

exports.getAllMatches = (req, res) => {
    res.json(matches);
};

exports.getMatchById = (req, res) => {
    const match = matches.find(m => m.id == req.params.id);
    if (match) res.json(match);
    else res.status(404).json({ error: 'Match not found' });
};

exports.createMatch = (req, res) => {
    const newMatch = { id: matches.length + 1, ...req.body };
    matches.push(newMatch);
    res.status(201).json(newMatch);
};

exports.updateMatch = (req, res) => {
    const idx = matches.findIndex(m => m.id == req.params.id);
    if (idx !== -1) {
        matches[idx] = { ...matches[idx], ...req.body };
        res.json(matches[idx]);
    } else {
        res.status(404).json({ error: 'Match not found' });
    }
};

exports.deleteMatch = (req, res) => {
    const idx = matches.findIndex(m => m.id == req.params.id);
    if (idx !== -1) {
        matches.splice(idx, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Match not found' });
    }
};
