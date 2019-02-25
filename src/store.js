import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' 

const URL = 'https://www.reddit.com/r/all/top.json?limit=60';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: null,
  },
  mutations: {
    SET_POSTS: (state, payload) => {
      state.posts = payload;
    }
  },
  actions: {
    API_POSTS: async (state) => {
      let {data} = await axios.get(URL);
        state.commit('SET_POSTS' , data.data.children);
        console.log(data.data.children);

    }
  },
  getters: {
    GET_POSTS: state => {
      return state.posts;
    },
}
})
