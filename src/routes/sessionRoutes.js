const express = require('express');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

router.get('/free-sessions', (req, res) => {
  const sessions = sessionController.listFreeSessions();
  res.json(sessions);
});

router.post('/book-session', (req, res) => {
  const { deanID, studentID, slot } = req.body;
  const session = sessionController.bookSession(deanID, studentID, slot);
  res.json(session);
});

router.get('/pending-sessions/:deanID', (req, res) => {
  const { deanID } = req.params;
  const sessions = sessionController.listPendingSessions(deanID);
  res.json(sessions);
});

router.put('/complete-session/:sessionID', (req, res) => {
  const { sessionID } = req.params;
  const success = sessionController.markSessionAsCompleted(sessionID);
  if (success) {
    res.json({ message: 'Session marked as completed' });
  } else {
    res.status(404).json({ message: 'Session not found' });
  }
});

module.exports = router;
