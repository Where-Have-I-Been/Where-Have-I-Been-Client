import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    PhotoURL: [],
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    PhotoURL: (state) => {
      return state.PhotoURL;
    }
  },
  mutations: {
    user(state, user){
      state.user = user;
    },
    PhotoURL(state, url){
      state.PhotoURL.push(url);
    }
  },
  actions: {
    user(context, user){
      context.commit("user", user);
    },
    PhotoURL(context, url){
      context.commit("PhotoURL", url);
    }
  },
  modules: {}
});
