initializeFirebase();
let db = firebase.firestore();
let dbSettings = { timestampsInSnapshots: true };
db.settings(dbSettings);

document.getElementById('button').addEventListener('click', event => {
  event.preventDefault();
  let company = document.getElementById('company').value;
  let hostName = document.getElementById('hostName').value;
  let hostPhone = document.getElementById('hostPhone').value;
  let hostEmail = document.getElementById('hostEmail').value;
  let jobPosition = document.getElementById('jobPosition').value;
  let visitorsAllowed = '';

  db.collection('host').add({
    company: company,
    hostName: hostName,
    hostEmail: hostEmail,
    hostPhone: hostPhone,
    jobPosition: jobPosition,
    visitorsAllowed: []
  });
});