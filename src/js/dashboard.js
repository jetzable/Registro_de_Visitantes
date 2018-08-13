// Initialize Firebase & Firestore
initializeFirebase();
let db = firebase.firestore();
let dbSettings = { timestampsInSnapshots: true };
db.settings(dbSettings);
getListOfVisitors();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    let displayName = user.displayName;
    let email = user.email;
  } else {
    location.href = ('../index.html');
  }
});

const drawListOfVisitors = (list) => {
  let segment = document.getElementById('tableData');
  let fragment = document.createDocumentFragment();
  segment.innerHTML = '';
  list.forEach(element => {
    let i = 1;
    let tr = document.createElement('tr');
    tr.innerHTML = `<th scope="row">${i}</th>
    <td>${element.name}</td>
    <td>${element.company}</td>
    <td>${element.hostName}</td>
    <td>${element.date}</td>`;
    i++;
    fragment.appendChild(tr);
  });
  segment.appendChild(fragment);
};

document.getElementById('logOutBtn').addEventListener('click', event => {
  event.preventDefault();
  signOutUser();
  swal('La sesión se cerró correctamente');
  location.href = ('login.html');
});

