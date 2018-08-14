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
window.newAdminForm = (email, password) => {
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
window.adminLogIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      location.href = ('dashboard.html');
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


window.addingRegister = (visitorName, date, company, host, photoLink, hostMail) => {
  db.collection('visitors').add({
    name: visitorName,
    date: date,
    company: company,
    hostName: host,
    status: 'pending',
    photo: photoLink,
    hostEmail: hostMail
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      popId(docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

window.signOutUser = () => {
  firebase.auth().signOut()
    .then(() => {
      // Sign out user.
    }).catch((error) => {
      console.log(error);
    });
};


// Reset password //
window.passwordReset = (userEmail) => {
  let auth = firebase.auth();

  auth.sendPasswordResetEmail(userEmail)
    .then(() => {
      // Email sent.
      alert('Se ha enviado un mail a tu correo para poder recuperar tu contraseña.');
      // location.href = ('../index.html');
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
};


window.getListOfVisitors = () => {
  let todayDate = new Date();
  let today = todayDate.getDate();
  let currentMonth = todayDate.getMonth() + 1;
  if (currentMonth < 10) {
    currentMonth = '0' + currentMonth;
  };
  let currentYear = todayDate.getFullYear();
  let fullDate = `${currentYear}` + '-' + `${currentMonth}` + '-' + `${today}`;
  let listOfVisits = [];
  db.collection('visitors').get()
    .then(reference => {
      reference.forEach(visitor => {
        if (visitor.data().date === fullDate) {
          listOfVisits.push(visitor.data());
        }
      });
      drawListOfVisitors(listOfVisits);
    });
};

window.searchId = (id) => {
  db.collection('visitors').doc(id).get()
    .then(visitor => {
      let visitorInfo = visitor.data();
      db.collection('visitors').doc(id).update({ status: 'arrived' });
      drawValidatingResults(visitorInfo);
    })
    .catch(error => {
      console.log(error);
    });
};


window.generateReport = (option, search) => {
  let matchArray = [];
  if (option === 'visitorName') {
    let searchNameValue = search.toUpperCase();
    db.collection('visitors').get()
      .then(list => {
        list.forEach(element => {
          let visitorName = element.data().name;
          let nameField = visitorName.toUpperCase();
          let searchMatch = nameField.indexOf(searchNameValue);
          if (searchMatch !== -1) {
            matchArray.push(element.data());
          }
        });
        drawSearchResults(matchArray);
      });
  } else if (option === 'idVisit') {
    db.collection('visitors').doc(search).get()
      .then(element => {
        matchArray.push(element.data());
      });
  } else if (option === 'hostName') {
    let searchVisitorValue = search.toUpperCase();
    db.collection('visitors').get()
      .then(list => {
        list.forEach(element => {
          let hostName = element.data().hostName;
          let hostField = hostName.toUpperCase();
          let searchMatch = hostField.indexOf(searchVisitorValue);
          if (searchMatch !== -1) {
            matchArray.push(element.data());
          }
        });
        drawSearchResults(matchArray);
      });
  } else if (option === 'company') {
    let searchCompanyValue = search.toUpperCase();
    db.collection('visitors').get()
      .then(list => {
        list.forEach(element => {
          let company = element.data().company;
          let companyField = company.toUpperCase();
          let searchMatch = companyField.indexOf(searchCompanyValue);
          if (searchMatch !== -1) {
            matchArray.push(element.data());
          }
        });
        drawSearchResults(matchArray);
      });
  } else if (option === 'status') {
    if (search === 'checkin') {
      db.collection('visitors').get()
        .then(list => {
          list.forEach(element => {
            if (element.data().status === 'arrived') {
              matchArray.push(element.data());
            }
          });
          drawSearchResults(matchArray);
        });
    } else {
      db.collection('visitors').get()
        .then(list => {
          list.forEach(element => {
            if (element.data().status === 'pending') {
              matchArray.push(element.data());
            }
          });
          drawSearchResults(matchArray);
        });
    }
  } else if (option === 'date') {
    db.collection('visitors').get()
      .then(list => {
        list.forEach(element => {
          if (element.data().date === search) {
            matchArray.push(element.data());
          }
        });
        drawSearchResults(matchArray);
      });
  }
};

window.sendRegistrationNotification = () => {
  emailjs.init("user_AzjHoxFk1xXHh8iUuRm5M");
};

window.sendEmailTo = () => {
  var myform = $("form#myform");
  myform.submit(function (event) {
    event.preventDefault();
    // Change to your service ID, or keep using the default service
    var service_id = "default_service";
    var template_id = "notificacion";
    myform.find("button").text("Sending...");
    emailjs.sendForm(service_id, template_id, "myform")
      .then(function () {
        alert("Sent!");
        myform.find("button").text("Send");
      }, function (err) {
        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
        myform.find("button").text("Send");
      });
    return false;
  });
  location.href = ('dashboard.html');
};