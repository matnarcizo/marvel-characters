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

const characters = [
  {
    id: 1009629,
    name: 'Storm',
    description:
      'Ororo Monroe is the descendant of an ancient line of African priestesses, all of whom have white hair, blue eyes, and the potential to wield magic.',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/526963dad214d',
      extension: 'jpg',
    },
  },
];

const getFakeCharactersList = (): Promise<{}[]> => Promise.resolve(characters);

export { getCharactersList, getFakeCharactersList };

const data = [
  {
    id: 1009629,
    name: 'Storm',
    description:
      'Ororo Monroe is the descendant of an ancient line of African priestesses, all of whom have white hair, blue eyes, and the potential to wield magic.',
    modified: '2016-05-26T11:50:27-0400',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/526963dad214d',
      extension: 'jpg',
    },
    resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009629',
    comics: {
      available: 829,
      collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009629/comics',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/43498',
          name: 'A+X (2012) #3',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/17701',
          name: 'AGE OF APOCALYPSE: THE CHOSEN 1 (1995) #1',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/37996',
          name: 'Age of X: Alpha (2010) #1',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/12676',
          name: 'Alpha Flight (1983) #17',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/12694',
          name: 'Alpha Flight (1983) #33',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/12725',
          name: 'Alpha Flight (1983) #61',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/12668',
          name: 'Alpha Flight (1983) #127',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/21511',
          name: 'Astonishing X-Men (2004) #25',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/21714',
          name: 'Astonishing X-Men (2004) #26',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/21941',
          name: 'Astonishing X-Men (2004) #27',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/23087',
          name: 'Astonishing X-Men (2004) #28',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/23937',
          name: 'Astonishing X-Men (2004) #29',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/24501',
          name: 'Astonishing X-Men (2004) #30',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/24503',
          name: 'Astonishing X-Men (2004) #32',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/24504',
          name: 'Astonishing X-Men (2004) #33',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/24505',
          name: 'Astonishing X-Men (2004) #34',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/30332',
          name: 'Astonishing X-Men (2004) #35',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/38318',
          name: 'Astonishing X-Men (2004) #38',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/38319',
          name: 'Astonishing X-Men (2004) #40',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/39318',
          name: 'Astonishing X-Men (2004) #44',
        },
      ],
      returned: 20,
    },
    series: {
      available: 209,
      collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009629/series',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
          name: 'A+X (2012 - 2014)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3614',
          name: 'AGE OF APOCALYPSE: THE CHOSEN 1 (1995)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/13603',
          name: 'Age of X: Alpha (2010)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
          name: 'Alpha Flight (1983 - 1994)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
          name: 'Astonishing X-Men (2004 - 2013)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/9085',
          name: 'Avengers (2010 - 2012)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
          name: 'Avengers (1998 - 2004)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
          name: 'Avengers (1963 - 1996)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
          name: 'Avengers Assemble (2004)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/15305',
          name: 'Avengers Vs. X-Men (2012)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3626',
          name: 'Bishop (1994 - 1995)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/6804',
          name: 'Black Panther (2009 - 2010)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/784',
          name: 'Black Panther (2005 - 2008)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/20912',
          name: 'Black Panther (2016 - 2018)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24291',
          name: 'Black Panther (2018 - Present)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/2115',
          name: 'Black Panther (1998 - 2003)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/23017',
          name: 'Black Panther and the Crew (2017)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3850',
          name: 'Black Panther Annual (2008)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/2226',
          name: 'Black Panther: Civil War (2007)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/15691',
          name: 'Black Panther: The Man Without Fear (2010 - 2011)',
        },
      ],
      returned: 20,
    },
    stories: {
      available: 967,
      collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009629/stories',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/497',
          name: 'Interior #497',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/648',
          name: '1 of 2- Black Panther crossover',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/650',
          name: '2 of 2- Black Panther crossover',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/737',
          name: '2 of 5 - Savage Land',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/738',
          name: 'Uncanny X-Men (1963) #457',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/739',
          name: '3 of 5 - Savage Land',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/742',
          name: 'Uncanny X-Men (1963) #459',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/743',
          name: "5 of 5 - World's End",
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/745',
          name: '1 of 2 - Mojo Rising',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/747',
          name: '2 of 2 - Mojo Rising',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/749',
          name: '1 of 4 - Season of the Witch',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/760',
          name: 'Uncanny X-Men (1963) #467',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/761',
          name: "2 of 3 - Grey's End",
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/765',
          name: '1 of 3 -',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/767',
          name: "2 of 3 - Wand'ring Star",
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/768',
          name: 'UNCANNY X-MEN (1963) #471',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/770',
          name: 'UNCANNY X-MEN (1963) #472',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/1420',
          name: 'ULTIMATE X-MEN (2000) #43',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/1422',
          name: 'ULTIMATE X-MEN (2000) #44',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/1426',
          name: 'ULTIMATE X-MEN (2000) #49',
          type: 'cover',
        },
      ],
      returned: 20,
    },
    events: {
      available: 30,
      collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009629/events',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
          name: 'Acts of Vengeance!',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
          name: 'Age of Apocalypse',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
          name: 'Age of X',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
          name: 'Atlantis Attacks',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
          name: 'Avengers VS X-Men',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
          name: 'Civil War',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
          name: 'Dark Reign',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/240',
          name: 'Days of Future Present',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/245',
          name: 'Enemy of the State',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
          name: 'Evolutionary War',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
          name: 'Fall of the Mutants',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
          name: 'Fatal Attractions',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
          name: 'House of M',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
          name: 'Inferno',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
          name: 'Infinity War',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/334',
          name: 'Inhumans Vs. X-Men',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
          name: 'Initiative',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
          name: 'Maximum Security',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/299',
          name: 'Messiah CompleX',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/263',
          name: 'Mutant Massacre',
        },
      ],
      returned: 20,
    },
    urls: [
      {
        type: 'detail',
        url:
          'http://marvel.com/comics/characters/1009629/storm?utm_campaign=apiRef&utm_source=47efb24b1c09417ad81d90bcd72a38c5',
      },
      {
        type: 'wiki',
        url: 'http://marvel.com/universe/Storm?utm_campaign=apiRef&utm_source=47efb24b1c09417ad81d90bcd72a38c5',
      },
      {
        type: 'comiclink',
        url:
          'http://marvel.com/comics/characters/1009629/storm?utm_campaign=apiRef&utm_source=47efb24b1c09417ad81d90bcd72a38c5',
      },
    ],
  },
];
