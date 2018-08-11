initializeFirebase();
let db = firebase.firestore();
let dbSettings = { timestampsInSnapshots: true };
db.settings(dbSettings);

document.getElementById('logOutBtn').addEventListener('click', event => {
  event.preventDefault();
  signOutUser();
  swal('La sesión se cerró correctamente');
});

document.getElementById('visitsToday').addEventListener('click', event => {
  event.preventDefault();
  let todayDate = new Date();
  let today = todayDate.getDate();
  let currentMonth = todayDate.getMonth();
  let currentYear = todayDate.getFullYear();
  let fullDate = `${currentYear}` + '-' + `${currentMonth}` + '-' + `${today}`;
  console.log(fullDate);
  db.collection('visitors').get()
    .then(reference => {
      reference.forEach(visitor => {
        console.log(visitor.data().date);
      });
    });
});

// document.getElementById('newAdmin').addEventListener('click', event => {
//   event.preventDefault();
//   newAdminForm();
// });