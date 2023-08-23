// const fs = require('fs').promises;
import { promises as fs } from 'fs';
const contactsPath = require('node:path');


console.log(contactsPath);

fs.readFile(contactsPath.dirname('./db'))
  .then(data => console.log(data.toString()))
  .catch(err => console.log(err.message));


// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код. Возвращает массив контактов.
  console.log(db);
  return db;
}

function getContactById(contactId) {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null если объект с таким id не найден.
  return null;
}

function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null если объект с таким id не найден.
  return null;
}

function addContact(name, email, phone) {
  // ...твой код. Возвращает объект добавленного контакта. Возвращает null если объект с таким id не найден.
  return null;
}

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact
}