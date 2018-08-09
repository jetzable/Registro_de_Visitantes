// Initialize Firebase
window.initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyD4Yjk0q9wKBIluL2RJ7d3wpgxq4PIS7jg',
    authDomain: 'visitapp-700e9.firebaseapp.com',
    databaseURL: 'https://visitapp-700e9.firebaseio.com',
    projectId: 'visitapp-700e9',
    storageBucket: 'visitapp-700e9.appspot.com',
    messagingSenderId: '443650975761'
  });
  let db = firebase.firestore();
  let dbSettings = { timestampsInSnapshots: true };
  db.settings(dbSettings);
};

// New Admin
window.newAdminForm = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      verifyAccountWithEmail();
      alert('Se ha enviado un correo a tu email para verificar tu cuenta.');
      signOutUser();
      location.href = ('login.html');
    })
    .catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      if (errorCode === 'auth/invalid-email') {
        alert('Por favor, ingresa un correo electrónico válido.');
      } else if (errorCode === 'auth/weak-password') {
        alert('Por favor, ingresa una contraseña.');
      } else if (errorCode === 'auth/email-already-in-use') {
        alert('Usuario ya registrado, por favor verifica tus datos.');
      }
    });
};

// Admin Login
window.adminLogIn = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('se inicio sesión');
    })
    .catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Por favor, verifica tu contraseña.');
      } else if (errorCode === 'auth/user-not-found' || errorCode === 'auth/invalid-email' || errorCode === 'auth/argument-error') {
        alert('Por favor verifica tu usuario o Registrate para poder iniciar sesión.');
      } else if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('El correo ya ha sido registrado');
      }
    });
};

// Send email to verify email account //
window.verifyAccountWithEmail = () => {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(() => {
    alert('Se envió un mail a tu correo para poder verificar tu cuenta.');
  }).catch((error) => {
    console.log(error);
    alert('Hubo un problema con tu registro.');
  });
};

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     let usuarioAct = user.email;
//     console.log(usuarioAct);
//   } else {
//     console.log('No hay usuario activo');
//   }
// });

// btnLogOut.addEventListener('click', logOut());
// window.logOut = () => {
//   firebase.auth().signOut();
//   window.location.href = '../views/login.html';
// };