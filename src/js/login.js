initializeFirebase();

document.getElementById('adminLogin').addEventListener('click', event => {
  event.preventDefault();
  adminLogIn();
});
// document.getElementById('newAdmin').addEventListener('click', event => {
//   event.preventDefault();
//   newAdminForm();
// });