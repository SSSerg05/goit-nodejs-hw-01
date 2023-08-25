import Contacts from "./contacts.js"
import { program } from "commander";


const invokeAction = async ({ action, id, name, email, phone }) => {
  const actions = [
    { list: Contacts.listContacts },
    { remove: Contacts.removeContact },
    { add: Contacts.addContact },
    { get: Contacts.getContactById },
  ]
  if (actions[action] === 'undefined') { 
    return console.log('Unknown action type');
  }

  actions[action]({id, name, email, phone})
}

program
  .option("-a, --action <type>", 'choose action')
  .option("-i, --id     <type>", 'user id')
  .option("-n, --name   <type>", 'user name')
  .option("-e, --email  <type>", 'user email')
  .option("-p, --phone  <type>", 'user phone' );

program.parse()
const options = program.opts();

console.log("Hi. This HW-01");

Contacts.listContacts()
  .then(data => console.log(data));

Contacts.getContactById({ id: 'qdggE76Jtbfd9eWJHrssH'})
  .then(data => console.log(data));

Contacts.addContact({ name: 'qqq', email: 'nnnn', phone: '1111' })
  .then(data => console.log(data));

Contacts.removeContact({ id: 'qdggE76Jtbfd9eWJHrssH'})
  .then(data => console.log(data));

// Contacts.listContacts()
//   .then(data => console.log(data));

