import { reactive } from "vue";

export const store = reactive({
  search: "",
  movieResults: [],
  tvResults: [],
  Api_Key: "f402cbcfa914fa24a1871582eb55c24f",
});
