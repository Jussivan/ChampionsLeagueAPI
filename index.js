const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const teamsRoutes = require('./routes/teams');
const playersRoutes = require('./routes/players');
const matchesRoutes = require('./routes/matches');
const standingsRoutes = require('./routes/standings');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/teams', teamsRoutes);
app.use('/players', playersRoutes);
app.use('/matches', matchesRoutes);
app.use('/standings', standingsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Champions League API running on port ${PORT}`);
});
