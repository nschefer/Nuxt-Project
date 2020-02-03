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
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;
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
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date(),
        };

        return axios
          .post('https://noahs-nuxt-project.firebaseio.com/posts.json', createdPost)
          .then(result => {
            vuexContext.commit('addPost', { ...createdPost, id: result.data.name })
          })
          .catch(e => console.log(e));
      },
      editPost(vuexContext, editedPost) {
        return axios
          .put(
            `https://noahs-nuxt-project.firebaseio.com/posts/${editedPost.id}.json`,
            editedPost
          )
          .then(() => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e));
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore;
