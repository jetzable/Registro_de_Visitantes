// Initialize Firebase & Firestore
initializeFirebase();
let db = firebase.firestore();
let dbSettings = { timestampsInSnapshots: true };
db.settings(dbSettings);

const drawValidatingResults = (matchResult) => {
  document.getElementById('content').innerHTML = `
  <div class="form">
            <div class="card">
              <img class="card-img-top" src="img_avatar1.png" alt="Card image">
              <div class="card-body">
                <h4 class="card-title">${matchResult.name}</h4>
                <h5 class="card-text">${matchResult.hostName}</h5>
                <h5 class="card-text">${matchResult.date}</h5>
                <button id="checkInNotification" class="btn btn-primary">Notificar</button>
              </div>
            </div>
          </div>`;
};


document.getElementById('validateChechIn').addEventListener('click', event => {
  event.preventDefault();
  let idToCheck = document.getElementById('idCheckIn').value;
  searchId(idToCheck);
  document.getElementById('idCheckIn').value = '';
});

document.getElementById('logOutBtn').addEventListener('click', event => {
  event.preventDefault();
  signOutUser();
  swal('La sesión se cerró correctamente');
  location.href = ('login.html');
});