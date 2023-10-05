class User {
    constructor(id, universityID, password) {
      this.id = id;
      this.universityID = universityID;
      this.password = password;
      this.token = null;
    }
  }
  
  module.exports = User;
  