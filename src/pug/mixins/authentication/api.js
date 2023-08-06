const axios = require('axios');

function request(method, url, headers, params, data) {
  return axios({
    method,
    url,
    headers,
    params,
    data
  });
}

module.exports = { request };
