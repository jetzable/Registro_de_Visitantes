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
};

// New Admin

window.newAdminForm = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  localStorage.setItem('email', email);
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    verificar();
  }).catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
  });
};

window.adminLogIn = () => {
  const email1 = document.getElementById('email1').value;
  const password1 = document.getElementById('password1').value;
  localStorage.setItem('email1', email1);
  firebase.auth().signInWithEmailAndPassword(email1, password1)
    .then(() => {
      console.log('Yay');
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert('Verifica tus datos');
    });
};

window.verifyMail = () => {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(() => {
    alert('Se envió un mail a tu correo para poder verificar tu cuenta.');
  }).catch((error) => {
    console.log(error);
    alert('Hubo un problema con tu registro.');
  });
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    let usuarioAct = user.email;
    console.log(usuarioAct);
  } else {
    console.log('No hay usuario activo');
  }
});

btnLogOut.addEventListener('click', logOut());
window.logOut = () => {
  firebase.auth().signOut();
  window.location.href = '../views/login.html';
};