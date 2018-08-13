//verifica funciones de init.js
describe('initializeFirebase', () => {

  it('debería ser una función', () => {
    assert.equal(typeof initializeFirebase, 'function');
  });
  });
  describe('newAdminForm', () => {

   it('debería ser una función', () => {
     assert.equal(typeof newAdminForm, 'function');
   });
  });

  describe('adminLogIn', () => {

   it('debería ser una función', () => {
     assert.equal(typeof adminLogIn, 'function');
   });
  });
  describe('verifyAccountWithEmail', () => {

   it('debería ser una función', () => {
     assert.equal(typeof verifyAccountWithEmail, 'function');
   });
 });
 describe('addingRegister', () => {

  it('debería ser una función', () => {
    assert.equal(typeof addingRegister, 'function');
  });
 });
 describe('signOutUser', () => {

  it('debería ser una función', () => {
    assert.equal(typeof signOutUser, 'function');
  });
 });
 describe('passwordReset', () => {

  it('debería ser una función', () => {
    assert.equal(typeof passwordReset, 'function');
  });
 });
 describe('getListOfVisitors', () => {

  it('debería ser una función', () => {
    assert.equal(typeof getListOfVisitors, 'function');
  });
  it('debería retornar un arreglo de visitantes', () => {
    assert.equal(typeof getListOfVisitors, 'array');
  });
 });

 describe('searchId', () => {

  it('debería ser una función', () => {
    assert.equal(typeof searchId, 'function');
  });
 });
//verifica funciones
