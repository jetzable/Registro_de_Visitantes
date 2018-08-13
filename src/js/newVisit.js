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

// Get companies available to select in visitForm
const createCompanySelect = (companies) => {
  // Options lists
  let companiesAvailable = [];
  let hostList = [];

  // Getting data from DB to list Companies
  db.collection('host').get()
    .then(result => {
      result.forEach(host => {
        let companyIndex = companiesAvailable.indexOf(host.data().company);
        if (companyIndex === -1) {
          let companyValue = host.data().company;
          companiesAvailable.push(companyValue);
        }
      });
      // Creating fragment so we can update just that piece of DOM
      let sel = document.getElementById('companyName');
      let fragment = document.createDocumentFragment();
      companiesAvailable.forEach((company) => {
        let opt = document.createElement('option');
        opt.innerHTML = company;
        opt.value = company;
        fragment.appendChild(opt);
      });
      sel.appendChild(fragment);
      // Getting companie value selected & listing names of the hosts available for that option.
      sel.addEventListener('change', listHosts => {
        let companySelection = sel.value;
        db.collection('host').get()
          .then(host => {
            host.forEach(element => {
              if (element.data().company === companySelection) {
                hostList.push(element.data().hostName);
              }
            });
            let listOfHost = document.getElementById('hostName');
            let fragment = document.createDocumentFragment();
            hostList.forEach((name) => {
              let opt = document.createElement('option');
              opt.innerHTML = name;
              opt.value = name;
              fragment.appendChild(opt);
            });
            listOfHost.appendChild(fragment);
          });
      });
    })
    .catch(error => {
      console.log(error);
    });
};

createCompanySelect();

document.getElementById('visitRegister').addEventListener('click', event => {
  event.preventDefault();
  let visitorName = document.getElementById('visitorName').value;
  let visitorEmail = document.getElementById('visitorEmail').value;
  let visitDate = document.getElementById('visitDate').value;
  let companyName = document.querySelector('#companyName').value;
  let hostName = document.querySelector('#hostName').value;
  addingRegister(visitorName, visitorEmail, visitDate, companyName, hostName);
  document.getElementById('visitorName').value = '';
  document.getElementById('visitorEmail').value = '';
  document.getElementById('visitDate').value = '';
  document.querySelector('#companyName').value = '';
  document.querySelector('#hostName').value = '';
});

const popId = (id) => {
  swal({
    type: 'success',
    title: '¡Excelente!',
    text: 'El id de la visita es: ' + `${id}`,
    showCloseButton: true,
  });
};

document.getElementById('logOutBtn').addEventListener('click', event => {
  event.preventDefault();
  signOutUser();
  swal('La sesión se cerró correctamente');
  location.href = ('login.html');
});