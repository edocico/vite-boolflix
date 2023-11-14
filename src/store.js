import { reactive } from "vue";

export const store = reactive({
  movieResults: [],
  tvResults: [],
  Api_Key: "f402cbcfa914fa24a1871582eb55c24f",
  searchText: "",
  popularResults: [],
  upcomingResults: [],
  generiResults: [],
  byGenResults: [],
  imgPath: "https://image.tmdb.org/t/p/w342",
  flags: {
    it: "https://flagsapi.com/IT/flat/24.png",
    en: "https://flagsapi.com/GB/flat/24.png",
    fr: "https://flagsapi.com/FR/flat/24.png",
    de: "https://flagsapi.com/DE/flat/24.png",
    es: "https://flagsapi.com/ES/flat/24.png",
    ja: "https://flagsapi.com/JP/flat/24.png",
  },
  modalOpen: false,
});
