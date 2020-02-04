const fs = require('fs');
const paths = require('path');

const contactsPath = paths.join(__dirname, 'db', 'contacts.json');

function listContacts() {
  fs.readFile(contactsPath, { encoding: 'utf-8' }, (err, data) => {
    try {
      const normalize = JSON.parse(data);
      console.table(normalize);
    } catch (error) {
      console.log('error in listCotnacts:', err);
    }
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, { encoding: 'utf-8' }, (error, data) => {
    try {
      const normalize = JSON.parse(data);

      const findContactById = normalize.find(item => item.id === contactId);
      console.log('get Contact by id:', findContactById);
    } catch (error) {
      console.log('error in getContactById:', error);
    }
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, { encoding: 'utf-8' }, (error, data) => {
    try {
      const normalize = JSON.parse(data);

      const deleteContact = normalize.filter(item => item.id !== contactId);
      console.log('remove Contact:', deleteContact);
      return deleteContact;
    } catch (error) {
      console.log('error in removeContact:', error);
    }
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, { encoding: 'utf-8' }, (error, data) => {
    try {
      const normalize = JSON.parse(data);

      const newContact = { name, email, phone };
      const allContacts = [...normalize, newContact];

      fs.writeFile(contactsPath, JSON.stringify(allContacts), () => {
        console.log('saved!!!');
      });

      console.log(allContacts);
    } catch (error) {
      console.log('error:', error);
    }
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
