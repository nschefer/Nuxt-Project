import Vuex from 'vuex';

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
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'First Post',
                previewText: 'This is our first post',
                thumbnail:
                  'https://www-tc.pbs.org/wgbh/nova/media/images/nova-wonders-can-we-build-a-brain-hero_xn7Rr8X.width-800.jpg',
              },
              {
                id: '2',
                title: 'Second Post',
                previewText: 'This is our second post',
                thumbnail:
                  'https://www-tc.pbs.org/wgbh/nova/media/images/nova-wonders-can-we-build-a-brain-hero_xn7Rr8X.width-800.jpg',
              },
            ])
            resolve();
          }, 1500);
        })
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
