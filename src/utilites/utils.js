// Import the MD5 module from the crypto-js library
import MD5 from "crypto-js/md5";

// Define a function to generate a hash using a timestamp, private key, and public key
const getHash = (ts, privateKey, publicKey) => {
  return MD5(ts + privateKey + publicKey).toString();
};

// Get the API URL from an environment variable
let API_URL = process.env.REACT_APP_BASE_URL;

// Define an asynchronous function to fetch a list of heroes by name
const fetchHeros = async (name) => {
  // Construct the URL for the API request
  let heroUrl = `${API_URL}/v1/public/characters`;
  let ts = Date.now().toString();
  let apiKey = process.env.REACT_APP_API_KEY;
  let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);
  let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${name}`;

  // Try to fetch the data from the API and return it
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};

// Define an asynchronous function to fetch a single hero by ID
const fetchHero = async (id) => {
  // Construct the URL for the API request
  let heroUrl = `${API_URL}/v1/public/characters/${id}`;
  let ts = Date.now().toString();
  let apiKey = process.env.REACT_APP_API_KEY;
  let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);
  let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  // Try to fetch the data from the API and return it
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};
// Export the functions fetchHeros to Home.jsx and fetchHero to HeroDetails.jsx
export { fetchHeros, fetchHero };
