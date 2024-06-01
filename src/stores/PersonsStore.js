import { defineStore } from "pinia";

const url = 'https://rickandmortyapi.com/api/character';

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
      },
      {
        "id": 336,
        "name": "Steven Phillips",
        "status": "Alive",
        "species": "Alien",
        "type": "Unknown-nippled alien",
        "gender": "Male",
        "origin": {
            "name": "Unity's Planet",
            "url": "https://rickandmortyapi.com/api/location/28"
        },
        "location": {
            "name": "Unity's Planet",
            "url": "https://rickandmortyapi.com/api/location/28"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/336.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/14"
        ],
        "url": "https://rickandmortyapi.com/api/character/336",
        "created": "2018-01-10T16:44:51.702Z"
      },
      {
        "id": 448,
        "name": "Gear Cop",
        "status": "Dead",
        "species": "Alien",
        "type": "Gear-Person",
        "gender": "Male",
        "origin": {
            "name": "Gear World",
            "url": "https://rickandmortyapi.com/api/location/57"
        },
        "location": {
            "name": "Gear World",
            "url": "https://rickandmortyapi.com/api/location/57"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/448.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/13"
        ],
        "url": "https://rickandmortyapi.com/api/character/448",
        "created": "2018-05-01T13:38:21.237Z"
      },
      {
        "id": 725,
        "name": "Tony Galopagus",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/725.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/44"
        ],
        "url": "https://rickandmortyapi.com/api/character/725",
        "created": "2021-10-17T10:01:10.143Z"
      },
      {
        "id": 758,
        "name": "Giant Assassin Hidden in the Statue of Liberty",
        "status": "Alive",
        "species": "Robot",
        "type": "",
        "gender": "Female",
        "origin": {
            "name": "France",
            "url": "https://rickandmortyapi.com/api/location/119"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/758.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/47"
        ],
        "url": "https://rickandmortyapi.com/api/character/758",
        "created": "2021-10-17T14:59:32.923Z"
      }
    ],
    episodes: [
    ],
    loading: true,
    personStatus: 'Alive'
  }),
  getters: {
    alivePerson() {
      return this.persons.filter(el => el.status == 'Alive');
    },
    totalPersons() {
      return this.persons.length;
    }
  },
  actions: {
    async getAllPersons() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        this.persons = data.results;
        await Promise.all(this.persons.map(person => {
          this.fetchFirstEpisode(person)
        }))
      } catch (error) {
        console.error('Ошибка при получении данных о персонажах:', error);
      }
    },
    async fetchFirstEpisode(character) {
      try {
        const episodeUrl = character.episode[0];
        const response = await fetch(episodeUrl).then(res => res.json())
        this.episodes.push(response);
      } catch (error) {
        console.error('Ошибка при получении данных об эпизоде:', error);
      }
    }
  }
});