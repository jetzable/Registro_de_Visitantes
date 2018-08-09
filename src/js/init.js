// Initialize Firebase
window.initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyD4Yjk0q9wKBIluL2RJ7d3wpgxq4PIS7jg',
    authDomain: "visitapp-700e9.firebaseapp.com",
    databaseURL: "https://visitapp-700e9.firebaseio.com",
    projectId: "visitapp-700e9",
    storageBucket: "visitapp-700e9.appspot.com",
    messagingSenderId: "443650975761"
  });

// / Registro Usuarios Nuevos
const btnSignUpModal = document.getElementById('btnSignUpModal');


const registrar = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // cons t userName = document.getElementById('userName').value;
  localStorage.setItem('email', email);
  // alert('Ingresa tus Datos');

  firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
    verificar();
    console.log(verificar);
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // alert('Verifica datos');
    // ...
  });
};
btnSignUpModal.addEventListener('click', registrar);

// Ingreso de Usuario y contraseña
const btnentrar = document.getElementById('btnentrar');


const entrar = () => {
  const email1 = document.getElementById('email1').value;
  const password1 = document.getElementById('password1').value;
  localStorage.setItem('email1', email1);
  firebase.auth().signInWithEmailAndPassword(email1, password1)
    .then(function() {
      // promise.catch(console.log(e.message));
      //window.location.href = 'lugar donde ir';
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert('Verifica tus datos');
      // ...
    });
};
btnentrar.addEventListener('click', entrar);

// verificar correo
const verificar = () => {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
};

// Observador
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    let usuarioAct = user.usuarioAct;
    console.log('usuario activo');
    localStorage.setItem('usuarioAct', usuarioAct);
    //window.location.href = 'lugar donde ir';
    // User is signed in.
  } else {
    console.log('No hay usuario activo');

    // No user is signed in.
  }
});

const btnLogOut = document.getElementById('btnLogOut');

btnLogOut.addEventListener('click', event => {
  firebase.auth().signOut();
  window.location.href = '../views/login.html';
});
};
