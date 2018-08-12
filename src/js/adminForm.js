initializeFirebase();
let db = firebase.firestore();
let dbSettings = { timestampsInSnapshots: true };
db.settings(dbSettings);

document.getElementById('newAdmin').addEventListener('click', event => {
  event.preventDefault();
  newAdminForm();
});
