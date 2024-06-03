const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Check if the database connection is successful
db.listCollections()
  .then(() => {
    console.log('Connected to Firestore database successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to Firestore database:', error);
  });

module.exports = db;