// const fs = require('fs').promises;
import { promises as fs } from 'fs';
import nanoid from 'nanoid';


const contactsPath = fs.resolve('db', 'contacts.json');


const readData = async (fileName) => {
  try {
    const data = await fs.readFile(fileName);
    return data.toString();   

  } catch (error) {
    console.log(`Cannot read file or file not found. ${error}`);
  }

  return null;
}




/* List Contacts
//=======================
*/
export const listContacts = async () => {
  // ...твой код. Возвращает массив контактов.
  const data = await readData(contactsPath);
  console.log(data);
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
  await fs.writeFile(contactsPath, result);

  return removeField
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
  const id = nanoid();
  const newField = {id, name, email, phone};
  const result = [...data, newField];

  await fs.writeFile(contactsPath, result);

  return null;
}


export default {
  listContacts,
  getContactById,
  removeContact,
  addContact
}