import Contacts from "./contacts.js"

console.log("Hi. This HW-01");

Contacts.listContacts()
  .then(data => console.log(data));

Contacts.getContactById('qdggE76Jtbfd9eWJHrssH')
  .then(data => console.log(data));

Contacts.addContact('qqq', 'nnnn', '1111')
  .then(data => console.log(data));

Contacts.removeContact('qdggE76Jtbfd9eWJHrssH')
  .then(data => console.log(data));

// Contacts.listContacts()
//   .then(data => console.log(data));