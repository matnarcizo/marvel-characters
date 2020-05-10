import axios from 'axios';
import md5 from 'crypto-js/md5';

const MARVEL_API_BASE_URL = 'https://gateway.marvel.com';
const MARVEL_API_CHARACTERS_ENDPOINT = '/v1/public/characters';

const getCharactersList = (): Promise<{}[]> => {
  const url = `${MARVEL_API_BASE_URL}${MARVEL_API_CHARACTERS_ENDPOINT}`;
  const ts = Math.round(new Date().getTime() / 1000);
  const hash = md5(`${ts}${process.env.MARVEL_PRIVATE_KEY}${process.env.MARVEL_PUBLIC_KEY}`).toString();

  return axios
    .get(url, {
      params: {
        apikey: process.env.MARVEL_PUBLIC_KEY,
        hash,
        ts,
      },
    })
    .then((result) => result.data.data.results);
};

export { getCharactersList };
