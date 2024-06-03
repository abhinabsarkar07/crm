// models/formModel.js
const db = require('../db');

class JobApplication {
  constructor(data) {
    this.date = data.date;
    this.candidateName = data.candidateName;
    this.recruiterName = data.recruiterName;
    this.status = data.status;
    this.interview = data.interview;
    this.submission = data.submission;
    this.interviewSchedule = data.interviewSchedule;
    this.sourceOfSubmission = data.sourceOfSubmission;
    this.position = data.position;
    this.location = data.location;
    this.vendorName = data.vendorName;
    this.vendorContact = data.vendorContact;
    this.company = data.company;
    this.rate = data.rate;
    this.employmentType = data.employmentType;
    this.comments = data.comments;
    this.followUp2 = data.followUp2;
    this.followUp3 = data.followUp3;
    this.followUp4 = data.followUp4;
    this.qcStatus = data.qcStatus;
  }

  // Method to convert JobApplication instance to a plain JavaScript object
  toObject() {
    return {
      date: this.date,
      candidateName: this.candidateName,
      recruiterName: this.recruiterName,
      status: this.status,
      interview: this.interview,
      submission: this.submission,
      interviewSchedule: this.interviewSchedule,
      sourceOfSubmission: this.sourceOfSubmission,
      position: this.position,
      location: this.location,
      vendorName: this.vendorName,
      vendorContact: this.vendorContact,
      company: this.company,
      rate: this.rate,
      employmentType: this.employmentType,
      comments: this.comments,
      followUp2: this.followUp2,
      followUp3: this.followUp3,
      followUp4: this.followUp4,
      qcStatus: this.qcStatus
    };
  }

  async save() {
    try {
      // Save the plain JavaScript object representation of the JobApplication instance
      await db.collection('Form').add(this.toObject());
      console.log('Job application saved successfully!');
    } catch (error) {
      console.error('Error saving job application:', error);
    }
  }

  static async getAll() {
    try {
      const snapshot = await db.collection('Form').get();
      const data = snapshot.docs.map((doc) => doc.data());
      return data;
    } catch (error) {
      console.error('Error fetching job applications:', error);
      throw error;
    }
  }

  static async delete(id) {
    try {
        await db.collection('Form').doc(id).delete();
        console.log('Form data deleted successfully!');
    } catch (error) {
        console.error('Error deleting form data:', error);
        throw error;
    }
}
}

module.exports = JobApplication;
