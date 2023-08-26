import {listContacts, removeContact, addContact, getContactById} from "./contacts.js"
import { program } from "commander";

// Invoke Action with command line in terminal
//=======================
// @param {object} {action, id, name, email, phone}
// 
// @return undefined
const invokeAction = async ({ action, id, name, email, phone }) => {
  const actions = {
    list: listContacts,
    remove: removeContact,
    add: addContact,
    get: getContactById 
  };

  if (!actions[action]) { 
    return console.log(`Unknown action type - ${action}`);
  }

  const field = { id, name, email, phone }
  await actions[action](field)
    .then (result => console.table(result) )
  
}


program
  .option("-a, --action <type>")
  .option("-i, --id     <type>",)
  .option("-n, --name   <type>")
  .option("-e, --email  <type>")
  .option("-p, --phone  <type>");

program.parse()
const options = program.opts();

invokeAction(options);
console.log("Hi. This HW-01");
