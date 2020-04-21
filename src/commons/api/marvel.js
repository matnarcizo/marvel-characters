import axios from 'axios';
import Crypto from 'crypto-js';

const MARVEL_API_BASE_URL = 'https://gateway.marvel.com';
const MARVEL_API_CHARACTERS_ENDPOINT =  '/v1/public/characters';

export const getCharactersList = async () => {
  const url = `${MARVEL_API_BASE_URL}${MARVEL_API_CHARACTERS_ENDPOINT}`;
  const ts = Math.round((new Date()).getTime() / 1000);
  const hash = Crypto.MD5(`${ts}${process.env.MARVEL_PRIVATE_KEY}${process.env.MARVEL_PUBLIC_KEY}`).toString()

  const characterList = await axios.get(url, {
    params: {
      apikey: process.env.MARVEL_PUBLIC_KEY,
      hash,
      ts
    }
  }).then(result => result.data.data.results)
  
  return characterList
}