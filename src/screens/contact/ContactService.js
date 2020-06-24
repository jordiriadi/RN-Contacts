import Sql from '../../Sql/client';
import Contact from './types/Contact';

export function getContacts() {
  const extractPayload = (payload) => payload.data.map(Contact);

  return Sql.query({}, { method: 'GET' }).then(extractPayload);
}

export function addContact(formValues) {

  return Sql.query({}, { method: 'POST', query: formValues});
}

export function updateContact(id, _formValues) {
  const formValues = {
    firstName: _formValues.firstName,
    lastName: _formValues.lastName,
    age: _formValues.age
  };
  const stringifyParams = `/${id}`;

  return Sql.query({}, { method: 'PUT', query: formValues, stringifyParams})
}

export function deleteContact(id) {
  const stringifyParams = `/${id}`;

  return Sql.query({}, { method: 'DELETE', stringifyParams});
}

export default {
  getContacts,
  addContact,
  updateContact,
  deleteContact
}