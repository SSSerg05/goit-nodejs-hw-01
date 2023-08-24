// const fs = require('fs').promises;
import { promises as fs } from 'fs';
import path from 'path';

const contactsPath = './db/contacts.json';

async function readFile(fileName) {
  const filePath = path.dirname(fileName)
  const db = await fs.readFile(contactsPath)
    .then(data => {
      //console.log(data.toString())
      return data.toString();
    } )
    .catch(err => console.log(err.message));
  //console.log(db);
  return db
}


// TODO: задокументировать каждую функцию
async function listContacts() {
  // ...твой код. Возвращает массив контактов.
  return readFile(contactsPath);
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

listContacts().then(data => console.log(data))

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact
}