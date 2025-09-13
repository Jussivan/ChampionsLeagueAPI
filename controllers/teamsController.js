let teams = [
    { id: 1, name: 'Real Madrid', country: 'Spain' },
    { id: 2, name: 'Manchester City', country: 'England' }
    // ...outros times...
];

exports.getAllTeams = (req, res) => {
    res.json(teams);
};

exports.getTeamById = (req, res) => {
    const team = teams.find(t => t.id == req.params.id);
    if (team) res.json(team);
    else res.status(404).json({ error: 'Team not found' });
};

exports.createTeam = (req, res) => {
    const newTeam = { id: teams.length + 1, ...req.body };
    teams.push(newTeam);
    res.status(201).json(newTeam);
};

exports.updateTeam = (req, res) => {
    const idx = teams.findIndex(t => t.id == req.params.id);
    if (idx !== -1) {
        teams[idx] = { ...teams[idx], ...req.body };
        res.json(teams[idx]);
    } else {
        res.status(404).json({ error: 'Team not found' });
    }
};

exports.deleteTeam = (req, res) => {
    const idx = teams.findIndex(t => t.id == req.params.id);
    if (idx !== -1) {
        teams.splice(idx, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Team not found' });
    }
};
