// Initialize Firebase & Firestore
initializeFirebase();
let db = firebase.firestore();
let dbSettings = { timestampsInSnapshots: true };
db.settings(dbSettings);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    let displayName = user.displayName;
    let email = user.email;
  } else {
    location.href = ('../index.html');
  }
});

const drawValidatingResults = (matchResult) => {
  document.getElementById('content').innerHTML = `
  <div class="form">
            <div class="card">
              <img class="card-img-top" src="${matchResult.photo}" alt="Card image">
              <div class="card-body">
                <h4 class="card-title">${matchResult.name}</h4>
                <h5 class="card-text">${matchResult.hostName}</h5>
                <h5 class="card-text">${matchResult.date}</h5>
                <a class="btn btn-primary" href="notification.html">Confirmar</a>
              </div>
            </div>
          </div>`;

  let nameValue = matchResult.hostName;
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
  swal({
    type: 'success',
    title: '¡Hasta Pronto!',
    text: 'Tu sesión se cerró correctamente.',
    showCloseButton: true,
  });
  location.href = ('../index.html');
});

const confirm = (hostNameValue) => {
  location.href = ('notification.html');
};