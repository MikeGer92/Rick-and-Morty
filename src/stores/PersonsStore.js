import { defineStore } from "pinia";

const url = 'https://rickandmortyapi.com/api/character';

export const usePersonsStore = defineStore('personsStore', {
  state: () => ({
    persons: [
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