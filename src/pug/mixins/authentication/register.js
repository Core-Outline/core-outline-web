const api = require('./api');

async function signUp(formData) {
  const url = 'http://3.91.67.250:5000/auth/signup'; // Replace this with the actual URL of your backend API endpoint
  const headers = { 'Content-Type': 'application/json' };
  const method = 'POST';

  // Call the request function from api.js to make the API call
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
}

async function createOrganization(formData) {
  const url = 'http://3.91.67.250:5000/organization/create'; // Replace this with the actual URL of your backend API endpoint
  const headers = { 'Content-Type': 'application/json' };
  const method = 'POST';

  // Call the request function from api.js to make the API call
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
}

const CWD = __dirname;

module.exports = { signUp, createOrganization, CWD };
