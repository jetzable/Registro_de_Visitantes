let myform = $('form#myform');
sendRegistrationNotification();

myform.submit((event) => {
  event.preventDefault();

  // Change to your service ID, or keep using the default service
  let service_id = 'default_service';
  let template_id = 'users_visitapp';

  myform.find('button').text('Enviando...');
  emailjs.sendForm(service_id, template_id, 'myform')
    .then(() => {
      alert('¡Se ha notificado al Anfitrión!');
      myform.find('button').text('Send');
    }, (err) => {
      alert('Send email failed!\r\n Response:\n ' + JSON.stringify(err));
      myform.find('button').text('Send');
    });
  return false;
});
