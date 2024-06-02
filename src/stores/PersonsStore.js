import { defineStore } from "pinia";

const INIIAL_URL = 'https://rickandmortyapi.com/api/character';


function createUrl(num, params) {
  if (params.name === 'name') {
    return `${INIIAL_URL}/?page=${num}&name=${params.value}`;
  } else if (params.name === 'status') {
    return `${INIIAL_URL}/?page=${num}&status=${params.value}`;
  } else {
    return `${INIIAL_URL}/?page=${num}`;
  }
}

export const usePersonsStore = defineStore('personsStore', {
  state: () => ({
    persons: [
    ],
    episodes: [
    ],
    params: {
      name: '',
      value: ''
    },
    loading: true,
    personStatus: 'Alive',
    maxPage: 1,
    currPage: 1,
    pageList: []
  }),
  getters: {
    alivePerson() {
      return this.persons.filter(el => el.status == 'Alive');
    },
    totalPersons() {
      return this.persons.length;
    },
    getMaxPage() {
      return this.maxPage
    }
  },
  actions: {
    async setCurrentPage(num) {
      this.currPage = num
    },
    async fetchFirstEpisode(character) {
      try {
        const episodeUrl = character.episode[0];
        const response = await fetch(episodeUrl).then(res => res.json())
        this.episodes.push(response);
      } catch (error) {
        console.error('Ошибка при получении данных об эпизоде:', error);
      }
    },
    async getPagePersons(num) {
      try {
        const url = createUrl(num, this.params)
        const res = await fetch(url);
        const data = await res.json();
        this.maxPage = data.info.pages
        this.persons = data.results;
        await Promise.all(this.persons.map(person => {
          this.fetchFirstEpisode(person);
        }));
        this.loading = false
      } catch (error) {
        console.error('Ошибка при получении данных о персонажах:', error);
      };
    },
    async getStutusPersons(num, str) {
      try {
        const params = {
          name: 'status',
          value: str
        }
        const url = createUrl(num, params)
        const res = await fetch(url);
        const data = await res.json();
        this.maxPage = data.info.pages
        this.persons = data.results;
        await Promise.all(this.persons.map(person => {
          this.fetchFirstEpisode(person);
        }));
        this.params = params
        this.loading = false
      } catch (error) {
        console.error('Ошибка при получении данных о персонажах:', error);
      };
    },
    async getNamePersons(num, str) {
      try {
        const params = {
          name: 'name',
          value: str
        }
        const url = createUrl(num, params)
        this.params = params
        const res = await fetch(url);
        const data = await res.json();
        this.maxPage = data.info.pages
        this.persons = data.results;
        await Promise.all(this.persons.map(person => {
          this.fetchFirstEpisode(person);
        }));
        this.loading = false
      } catch (error) {
        console.error('Ошибка при получении данных о персонажах:', error);
      };
    },
  }
});