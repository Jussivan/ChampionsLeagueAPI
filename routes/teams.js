const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teamsController');

router.get('/', teamsController.getAllTeams);
router.get('/:id', teamsController.getTeamById);
router.post('/', teamsController.createTeam);
router.put('/:id', teamsController.updateTeam);
router.delete('/:id', teamsController.deleteTeam);

module.exports = router;