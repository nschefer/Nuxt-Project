import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://noahs-nuxt-project.firebaseio.com/posts.json')
          .then(res => {
            const postsArr = [];
            for (const key in res.data) {
              if (res.data.hasOwnProperty(key)) {
                postsArr.push({ ...res.data[key], id: key });
              }
            }
            vuexContext.commit('setPosts', postsArr);
          })
          .catch(e => context.error(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore;
