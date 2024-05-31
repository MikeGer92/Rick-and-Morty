import { defineStore } from "pinia";

export const usePersonsStore = defineStore('personsStore', {
  state: () => ({
    persons: [
      {
        "id": 269,
        "name": "Presidentress of The Mega Gargantuans",
        "status": "Alive",
        "species": "Humanoid",
        "type": "Mega Gargantuan",
        "gender": "Female",
        "origin": {
          "name": "Mega Gargantuan Kingdom",
          "url": "https://rickandmortyapi.com/api/location/56"
        },
        "location": {
          "name": "Mega Gargantuan Kingdom",
          "url": "https://rickandmortyapi.com/api/location/56"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/269.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/31"
        ],
        "url": "https://rickandmortyapi.com/api/character/269",
        "created": "2017-12-31T14:01:44.995Z"
      },
      {
        "id": 418,
        "name": "Mrs. Sullivan's Boyfriend",
        "status": "Alive",
        "species": "Human",
        "type": "Necrophiliac",
        "gender": "Male",
        "origin": {
          "name": "Interdimensional Cable",
          "url": "https://rickandmortyapi.com/api/location/6"
        },
        "location": {
          "name": "Interdimensional Cable",
          "url": "https://rickandmortyapi.com/api/location/6"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/418.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/8"
        ],
        "url": "https://rickandmortyapi.com/api/character/418",
        "created": "2018-04-15T21:43:43.867Z"
      }
    ]
  })
});