class Session {
    constructor(id, deanID, studentID, slot) {
      this.id = id;
      this.deanID = deanID;
      this.studentID = studentID;
      this.slot = slot;
      this.status = 'pending'; // status can be 'pending', 'booked', or 'completed'
    }
  }
  
  module.exports = Session;
  