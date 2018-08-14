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

let selection = document.querySelector('#selectOptionToSearch');

selection.addEventListener('change', event => {
  event.preventDefault();
  if (selection.value === 'visitorName' || selection.value === 'idVisit' || selection.value === 'hostName' || selection.value === 'company') {
    document.getElementById('searchInputOption').innerHTML = `<label class="col-md-4 control-label" for="searchInput">Busca: </label>
      <div class="col-md-4">
        <input id="searchInput" name="searchInput" type="search" placeholder="Ingresa tu búsqueda" class="form-control input-md" required="">
      </div>`;
  } else if (selection.value === 'date') {
    document.getElementById('searchInputOption').innerHTML = `<label class="col-md-4 control-label" for="searchInput">Busca: </label>
      <div class="col-md-4">
        <input id="searchInput" name="searchInput" type="date" placeholder="Ingresa tu búsqueda" class="form-control input-md" required="">
      </div>`;
  } else if (selection.value === 'status') {
    document.getElementById('searchInputOption').innerHTML = `<form>
      <div class="form-group">
    <label class="col-md-4 control-label" for="statusOptions"></label>
    <div class="col-md-4">
    <div class="radio">
      <label for="statusOptions-0">
        <input type="radio" name="statusOptions" class="radio-input" value="checkin" checked="checked">
        Checked-In
      </label>
    </div>
    <div class="radio">
      <label for="statusOptions-1">
        <input type="radio" name="statusOptions" class="radio-input" value="pending">
        Llegada Pendiente
      </label>
    </div>
    </div>
  </div>
  
      </form>`;
  }
});

const drawSearchResults = (list) => {
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


document.getElementById('searchReport').addEventListener('click', event => {
  event.preventDefault();
  document.getElementById('searchResult').style.display = 'block';
  let optionToSearch = selection.value;
  if (optionToSearch === 'status') {
    let searchText = document.querySelector('.radio-input:checked').value;
    generateReport(optionToSearch, searchText);
  } else {
    let searchText = document.getElementById('searchInput').value;
    generateReport(optionToSearch, searchText);
  }
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