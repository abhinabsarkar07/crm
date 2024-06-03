const db = require('../db');
const bcrypt = require("bcrypt");

class User {
  constructor(data) {
    this.userName = data.userName;
    this.userEmail = data.userEmail;
    this.userPassword = data.userPassword;
    this.Role = data.Role;
  }

  async save() {
    try {
      const salt = await bcrypt.genSalt(10);
      this.userPassword = await bcrypt.hash(this.userPassword, salt);
      await db.collection('User').add(this.toObject());
      console.log('User saved successfully!');
    } catch (error) {
      console.error('Error saving user:', error);
      throw error;
    }
  }

  static async get(email) {
    try {
      const snapshot = await db.collection('User').where('userEmail', '==', email).get();
      if (snapshot.empty) return null;
      return snapshot.docs[0].data();
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }

  toObject() {
    return {
      userName: this.userName,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
      Role: this.Role
    };
  }
}

module.exports = User;
