// const fs = require('fs').promises;
import { promises as fs } from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';


const contactsPath = path.resolve('db', 'contacts.json');

// Read File DataBase
//=======================
// @param {string} [fileName]
// 
// @return [{...},{...}] || null - array of objects || null
const readData = async (fileName) => {
  try {
    const data = await fs.readFile(fileName);
    return JSON.parse(data);

  } catch (error) {
    console.log(`Cannot read file or file not found. ${error}`);
  }

  return null;
}

// Update File DataBase
//=======================
// @param {string} data
// 
// @return undefined
const updateData = (data) =>
  fs.writeFile(contactsPath, JSON.stringify(data, null, 2))


// List Contacts
//=======================
// @return [{...},{...},{...}] || null
export const listContacts = async () => {
  // ...твой код. Возвращает массив контактов.
  const data = await readData(contactsPath);

  return data || null;
}


// get Contact By Id
//=======================
// @param {object} {id}
// 
// @return {...} || null - object || null
export const getContactById = async ({ id }) => {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null если объект с таким id не найден.
  const data = await readData(contactsPath);
  const result = data.find(item => item.id === id)

  return result || null;
}


// remove field without DataBase file 
//=======================
// @param {object} {id}
// 
// @return {...} || null - object || null
export const removeContact = async({ id }) => {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null если объект с таким id не найден.
  const removeField = await getContactById({ id });

  if (!removeField) { 
    return null
  }
  
  const data = await readData(contactsPath);
  const result = data.filter(item => item.id !== id)
  await updateData(result);

  return removeField;
}


// Add Contact in DataBase file
//=======================
// @param {object} {name, email, phone}
// 
// @return {...} || null - object || null
export const addContact = async ({ name, email, phone }) => {
  // ...твой код. Возвращает объект добавленного контакта. Возвращает null если объект с таким id не найден.
  const data = await readData(contactsPath);
  const newField = {id: nanoid(), name, email, phone};
  const result = [ ...data, newField ];

  await updateData(result);

  return newField;
}


export default {
  listContacts,
  getContactById,
  removeContact,
  addContact
}