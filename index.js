import {listContacts, removeContact, addContact, getContactById} from "./contacts.js"
import { program } from "commander";


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
  console.log(field);
  await actions[action](field)
    .then (result => console.log(result) )
  
}

program
  .option("-a, --action <type>")
  .option("-i, --id     <type>",)
  .option("-n, --name   <type>")
  .option("-e, --email  <type>")
  .option("-p, --phone  <type>");

program.parse()
const options = program.opts();
console.log(options);

invokeAction(options);

// program.parse(process.argv);

// const options = program.opts();
// if (options.cheese === undefined) console.log('no cheese');
// else if (options.cheese === true) console.log('add cheese');
// else console.log(`add cheese type ${options.cheese}`);
console.log("Hi. This HW-01");
