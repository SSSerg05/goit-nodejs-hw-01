// const fs = require('fs').promises;
import { promises as fs } from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';


const contactsPath = path.resolve('db', 'contacts.json');


const readData = async (fileName) => {
  try {
    const data = await fs.readFile(fileName);
    return JSON.parse(data);

  } catch (error) {
    console.log(`Cannot read file or file not found. ${error}`);
  }

  return null;
}

const updateData = (data) => fs.writeFile(contactsPath, JSON.stringify(data, null, 2))


/* List Contacts
//=======================
*/
export const listContacts = async () => {
  // ...твой код. Возвращает массив контактов.
  const data = await readData(contactsPath);

  return data || null;
}


// get Contact By Id
//=======================
// contactId : string
//
export const getContactById = async (contactId) => {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null если объект с таким id не найден.
  const data = await readData(contactsPath);
  const result = data.find(item => item.id === contactId)

  return result || null;
}


// remove field of DB 
//=======================
//  contactId: string
//
export const removeContact = async (contactId) => {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null если объект с таким id не найден.
  const removeField = getContactById(contactId);
  
  const data = await readData(contactsPath);
  const result = data.filter(item => item !== contactId)
  updateData(result);

  return removeField;
}


//  add Contact in DB
//=======================
//    name: string,
//    email: string,
//    phone: string 
//
export const addContact = async (name, email, phone) => {
  // ...твой код. Возвращает объект добавленного контакта. Возвращает null если объект с таким id не найден.
  const data = await readData(contactsPath);
  const newField = {id: nanoid(), name, email, phone};
  const result = [ ...data, newField ];

  updateData(result);

  return null;
}


export default {
  listContacts,
  getContactById,
  removeContact,
  addContact
}