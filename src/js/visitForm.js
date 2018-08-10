document.getElementById('visitRegister').addEventListener('click', event => {
  event.preventDefault();
  let visitorName = document.getElementById('visitorName').value;
  let visitorEmail = document.getElementById('visitorEmail').value;
  let visitDate = document.getElementById('visitDate').value;
  let hostName = document.querySelector('#hostName').value;
  console.log(visitorName);
  console.log(visitorEmail);
  console.log(visitDate);
  console.log(hostName);
});