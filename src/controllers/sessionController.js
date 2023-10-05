const uuid = require('uuid');
const Session = require('../models/Session');

const sessions = [];

function listFreeSessions() {
  // Return available slots (Thursday and Friday at 10 AM)
  const availableSlots = [
    { day: 'Thursday', time: '10:00 AM' },
    { day: 'Friday', time: '10:00 AM' },
  ];
  return availableSlots;
}

function bookSession(deanID, studentID, slot) {
  const id = uuid.v4();
  const session = new Session(id, deanID, studentID, slot);
  sessions.push(session);
  return session;
}

function listPendingSessions(deanID) {
  return sessions.filter(session => session.deanID === deanID && session.status === 'pending');
}

function markSessionAsCompleted(sessionID) {
  const session = sessions.find(session => session.id === sessionID);
  if (session) {
    session.status = 'completed';
    return true;
  }
  return false;
}

module.exports = {
  listFreeSessions,
  bookSession,
  listPendingSessions,
  markSessionAsCompleted,
};
