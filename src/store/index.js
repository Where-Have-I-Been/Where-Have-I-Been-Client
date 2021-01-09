import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    PhotoURL: [],
    profile: null,
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    PhotoURL: (state) => {
      return state.PhotoURL;
    },
    profile: (state) => {
      return state.profile;
    },
  },
  mutations: {
    user(state, user){
      state.user = user;
    },
    PhotoURL(state, url){
      state.PhotoURL.push(url);
    },
    profile(state, profile){
      state.PhotoURL = profile;
    }
  },
  actions: {
    user(context, user){
      context.commit("user", user);
    },
    PhotoURL(context, url){
      context.commit("PhotoURL", url);
    },
    profile(context, profile){
      context.commit("profile", profile);
    }
  },
  modules: {}
});
