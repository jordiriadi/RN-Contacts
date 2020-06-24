const defaultApiClient = `https://simple-contact-crud.herokuapp.com/contact`;

const handleSuccessfulRequest = (response = {}) => {
  if (response.error) {
    handleFailedRequest(response);
  }
  return Promise.resolve(response);
}

const handleFailedRequest = (response) => {
  return Promise.reject(response.message);
}

export const request = (serviceContext = {}, options = {}) => {
  const { apiClient = defaultApiClient } = serviceContext;

  return asyncRequest(apiClient, options);
}

async function asyncRequest(apiClient, options) {
  const {
    method = null,
    mode = 'cors',
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:3000',
    },
    query,
    stringifyParams = ''
  } = options;

  try {
    const apiClientWithParam = apiClient + stringifyParams;
    const response = await fetch(apiClientWithParam, {
      mode, 
      method, 
      headers, 
      body: JSON.stringify(query)
    });
    const json = await response.json();
    const statusCode = await response.status;
    
    if (statusCode === 400) {
      return handleFailedRequest(json);
    }
    return handleSuccessfulRequest(json);
  } catch(err) {
    return handleFailedRequest(err);
  }
}

const query = request;

const SqlClient = {
  query
}

export default SqlClient;