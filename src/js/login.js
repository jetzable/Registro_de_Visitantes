initializeFirebase();
let db = firebase.firestore();
let dbSettings = { timestampsInSnapshots: true };
db.settings(dbSettings);

document.getElementById('adminLogin').addEventListener('click', event => {
  event.preventDefault();
  adminLogIn();
});
