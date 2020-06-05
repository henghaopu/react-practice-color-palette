const SERVER_BASE_URI = 'http://localhost:5000';

export async function getPalettes() {
  try {
    const response = await fetch(`${SERVER_BASE_URI}/api/v1/palettes`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

// proxy error occcurs after a while
// "proxy": "http://127.0.0.1:5000", "secure": false still doesn't work
// reference: https://medium.com/@bryantjiminson/solving-proxy-error-could-not-proxy-request-xxx-from-yyy-from-local-reactjs-app-to-nodejs-app-f28f3548afb9
