initializeFirebase();
let db = firebase.firestore();
let dbSettings = { timestampsInSnapshots: true };
db.settings(dbSettings);
sendRegistrationNotification(); 

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    let displayName = user.displayName;
    let email = user.email;
  } else {
    location.href = ('../index.html');
  }
});


document.getElementById('notificationBtn').addEventListener('click', event => {
  event.preventDefault();
  let idVisit = document.getElementById('visitId').value;
  db.collection('visitors').doc(idVisit).get()
    .then(visitor => {
      let emailValue = visitor.data().hostEmail;
      document.getElementById('notificationBtn').style.display = 'none';
      document.getElementById('myform').innerHTML =
        `<label>Notificar a Anfitrión</label>
      <input type="email" name="to_email" id="hostEmail" value="${emailValue}">
      <button id="sendEmail" onclick="sendEmailTo()">
      Notificar
      </button>`;
    });
});