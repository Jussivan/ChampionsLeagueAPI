const teams = require('./teamsController').teams || [];
const matches = require('./matchesController').matches || [];

exports.getStandings = (req, res) => {
    // Exemplo simples: retorna times ordenados por vitórias
    // Para produção, calcule pontos, saldo de gols, etc.
    let standings = teams.map(team => {
        let played = matches.filter(m => m.homeTeamId === team.id || m.awayTeamId === team.id);
        let wins = played.filter(m =>
            (m.homeTeamId === team.id && m.homeGoals > m.awayGoals) ||
            (m.awayTeamId === team.id && m.awayGoals > m.homeGoals)
        ).length;
        return { team: team.name, wins };
    });
    standings.sort((a, b) => b.wins - a.wins);
    res.json(standings);
};
