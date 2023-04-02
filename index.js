const { Command } = require("commander");
const program = new Command();

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "getById":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);
    case "update":
      const updateContact = await contacts.updateContact(id, {
        name,
        email,
        phone,
      });
      return console.log(updateContact);
    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);
  }
};
program
  .option("-a, --action <type>")
  .option("--id <type>")
  .option("--name <type>")
  .option("--email <type>")
  .option("--phone <type>");

program.parse();
const options = program.opts();

invokeAction(options);
