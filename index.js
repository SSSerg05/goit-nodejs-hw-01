import Contacts from "./contacts.js"
import { program } from "commander";


const invokeAction = async ({ action, id, name, email, phone }) => {
  
}

program
  .option("-a, --action <type>")
  .option("-i, --id     <type>")
  .option("-n, --name   <type>")
  .option("-e, --email  <type>")
  .option("-p, --phone  <type>");

program.parse()
const options = program.opts();

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

