import { defineStore } from "pinia";

export const useEpisodsStore = defineStore('episodsStore', {
  state: () => ({
    episods: [
      {
        "id": 31,
        "name": "The Rickchurian Mortydate",
        "air_date": "October 1, 2017",
        "episode": "S03E10",
        "characters": [
          "https://rickandmortyapi.com/api/character/1",
          "https://rickandmortyapi.com/api/character/2",
          "https://rickandmortyapi.com/api/character/3",
          "https://rickandmortyapi.com/api/character/4",
          "https://rickandmortyapi.com/api/character/5",
          "https://rickandmortyapi.com/api/character/13",
          "https://rickandmortyapi.com/api/character/30",
          "https://rickandmortyapi.com/api/character/166",
          "https://rickandmortyapi.com/api/character/244",
          "https://rickandmortyapi.com/api/character/247",
          "https://rickandmortyapi.com/api/character/269",
          "https://rickandmortyapi.com/api/character/335",
          "https://rickandmortyapi.com/api/character/347",
          "https://rickandmortyapi.com/api/character/493"
        ],
        "url": "https://rickandmortyapi.com/api/episode/31",
        "created": "2017-11-10T12:56:36.929Z"
      },
      {
        "id": 8,
        "name": "Rixty Minutes",
        "air_date": "March 17, 2014",
        "episode": "S01E08",
        "characters": [
          "https://rickandmortyapi.com/api/character/1",
          "https://rickandmortyapi.com/api/character/2",
          "https://rickandmortyapi.com/api/character/3",
          "https://rickandmortyapi.com/api/character/4",
          "https://rickandmortyapi.com/api/character/5",
          "https://rickandmortyapi.com/api/character/20",
          "https://rickandmortyapi.com/api/character/28",
          "https://rickandmortyapi.com/api/character/29",
          "https://rickandmortyapi.com/api/character/34",
          "https://rickandmortyapi.com/api/character/37",
          "https://rickandmortyapi.com/api/character/54",
          "https://rickandmortyapi.com/api/character/88",
          "https://rickandmortyapi.com/api/character/91",
          "https://rickandmortyapi.com/api/character/129",
          "https://rickandmortyapi.com/api/character/134",
          "https://rickandmortyapi.com/api/character/136",
          "https://rickandmortyapi.com/api/character/145",
          "https://rickandmortyapi.com/api/character/153",
          "https://rickandmortyapi.com/api/character/157",
          "https://rickandmortyapi.com/api/character/176",
          "https://rickandmortyapi.com/api/character/183",
          "https://rickandmortyapi.com/api/character/184",
          "https://rickandmortyapi.com/api/character/195",
          "https://rickandmortyapi.com/api/character/207",
          "https://rickandmortyapi.com/api/character/214",
          "https://rickandmortyapi.com/api/character/222",
          "https://rickandmortyapi.com/api/character/250",
          "https://rickandmortyapi.com/api/character/266",
          "https://rickandmortyapi.com/api/character/277",
          "https://rickandmortyapi.com/api/character/279",
          "https://rickandmortyapi.com/api/character/314",
          "https://rickandmortyapi.com/api/character/315",
          "https://rickandmortyapi.com/api/character/316",
          "https://rickandmortyapi.com/api/character/317",
          "https://rickandmortyapi.com/api/character/318",
          "https://rickandmortyapi.com/api/character/351",
          "https://rickandmortyapi.com/api/character/358",
          "https://rickandmortyapi.com/api/character/367",
          "https://rickandmortyapi.com/api/character/370",
          "https://rickandmortyapi.com/api/character/373",
          "https://rickandmortyapi.com/api/character/402",
          "https://rickandmortyapi.com/api/character/403",
          "https://rickandmortyapi.com/api/character/404",
          "https://rickandmortyapi.com/api/character/405",
          "https://rickandmortyapi.com/api/character/406",
          "https://rickandmortyapi.com/api/character/407",
          "https://rickandmortyapi.com/api/character/408",
          "https://rickandmortyapi.com/api/character/409",
          "https://rickandmortyapi.com/api/character/410",
          "https://rickandmortyapi.com/api/character/411",
          "https://rickandmortyapi.com/api/character/412",
          "https://rickandmortyapi.com/api/character/413",
          "https://rickandmortyapi.com/api/character/414",
          "https://rickandmortyapi.com/api/character/415",
          "https://rickandmortyapi.com/api/character/416",
          "https://rickandmortyapi.com/api/character/417",
          "https://rickandmortyapi.com/api/character/418"
        ],
        "url": "https://rickandmortyapi.com/api/episode/8",
        "created": "2017-11-10T12:56:34.543Z"
      },
      {
        "id": 14,
        "name": "Auto Erotic Assimilation",
        "air_date": "August 9, 2015",
        "episode": "S02E03",
        "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/3",
            "https://rickandmortyapi.com/api/character/4",
            "https://rickandmortyapi.com/api/character/5",
            "https://rickandmortyapi.com/api/character/36",
            "https://rickandmortyapi.com/api/character/50",
            "https://rickandmortyapi.com/api/character/90",
            "https://rickandmortyapi.com/api/character/188",
            "https://rickandmortyapi.com/api/character/249",
            "https://rickandmortyapi.com/api/character/301",
            "https://rickandmortyapi.com/api/character/336",
            "https://rickandmortyapi.com/api/character/355",
            "https://rickandmortyapi.com/api/character/372"
        ],
        "url": "https://rickandmortyapi.com/api/episode/14",
        "created": "2017-11-10T12:56:35.158Z"
      },
      {
        "id": 13,
        "name": "Mortynight Run",
        "air_date": "August 2, 2015",
        "episode": "S02E02",
        "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/5",
            "https://rickandmortyapi.com/api/character/23",
            "https://rickandmortyapi.com/api/character/28",
            "https://rickandmortyapi.com/api/character/34",
            "https://rickandmortyapi.com/api/character/106",
            "https://rickandmortyapi.com/api/character/122",
            "https://rickandmortyapi.com/api/character/129",
            "https://rickandmortyapi.com/api/character/131",
            "https://rickandmortyapi.com/api/character/133",
            "https://rickandmortyapi.com/api/character/136",
            "https://rickandmortyapi.com/api/character/174",
            "https://rickandmortyapi.com/api/character/180",
            "https://rickandmortyapi.com/api/character/196",
            "https://rickandmortyapi.com/api/character/207",
            "https://rickandmortyapi.com/api/character/242",
            "https://rickandmortyapi.com/api/character/257",
            "https://rickandmortyapi.com/api/character/282",
            "https://rickandmortyapi.com/api/character/309",
            "https://rickandmortyapi.com/api/character/311",
            "https://rickandmortyapi.com/api/character/362",
            "https://rickandmortyapi.com/api/character/386",
            "https://rickandmortyapi.com/api/character/393",
            "https://rickandmortyapi.com/api/character/436",
            "https://rickandmortyapi.com/api/character/441",
            "https://rickandmortyapi.com/api/character/442",
            "https://rickandmortyapi.com/api/character/443",
            "https://rickandmortyapi.com/api/character/444",
            "https://rickandmortyapi.com/api/character/445",
            "https://rickandmortyapi.com/api/character/446",
            "https://rickandmortyapi.com/api/character/447",
            "https://rickandmortyapi.com/api/character/448",
            "https://rickandmortyapi.com/api/character/449",
            "https://rickandmortyapi.com/api/character/450",
            "https://rickandmortyapi.com/api/character/451"
        ],
        "url": "https://rickandmortyapi.com/api/episode/13",
        "created": "2017-11-10T12:56:35.055Z"
      },
      {
        "id": 44,
        "name": "A Rickconvenient Mort",
        "air_date": "July 4, 2021",
        "episode": "S05E03",
        "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/5",
            "https://rickandmortyapi.com/api/character/4",
            "https://rickandmortyapi.com/api/character/3",
            "https://rickandmortyapi.com/api/character/717",
            "https://rickandmortyapi.com/api/character/718",
            "https://rickandmortyapi.com/api/character/719",
            "https://rickandmortyapi.com/api/character/720",
            "https://rickandmortyapi.com/api/character/721",
            "https://rickandmortyapi.com/api/character/722",
            "https://rickandmortyapi.com/api/character/723",
            "https://rickandmortyapi.com/api/character/724",
            "https://rickandmortyapi.com/api/character/725",
            "https://rickandmortyapi.com/api/character/797",
            "https://rickandmortyapi.com/api/character/798",
            "https://rickandmortyapi.com/api/character/799"
        ],
        "url": "https://rickandmortyapi.com/api/episode/44",
        "created": "2021-10-15T17:00:24.102Z"
      },
      {
        "id": 47,
        "name": "Rick & Morty's Thanksploitation Spectacular",
        "air_date": "July 25, 2021",
        "episode": "S05E06",
        "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/5",
            "https://rickandmortyapi.com/api/character/4",
            "https://rickandmortyapi.com/api/character/3",
            "https://rickandmortyapi.com/api/character/347",
            "https://rickandmortyapi.com/api/character/753",
            "https://rickandmortyapi.com/api/character/754",
            "https://rickandmortyapi.com/api/character/756",
            "https://rickandmortyapi.com/api/character/755",
            "https://rickandmortyapi.com/api/character/757",
            "https://rickandmortyapi.com/api/character/758",
            "https://rickandmortyapi.com/api/character/759",
            "https://rickandmortyapi.com/api/character/760",
            "https://rickandmortyapi.com/api/character/761",
            "https://rickandmortyapi.com/api/character/762",
            "https://rickandmortyapi.com/api/character/763",
            "https://rickandmortyapi.com/api/character/764",
            "https://rickandmortyapi.com/api/character/765",
            "https://rickandmortyapi.com/api/character/766",
            "https://rickandmortyapi.com/api/character/767",
            "https://rickandmortyapi.com/api/character/768",
            "https://rickandmortyapi.com/api/character/800"
        ],
        "url": "https://rickandmortyapi.com/api/episode/47",
        "created": "2021-10-15T17:00:24.104Z"
      }
    ]
  })
});