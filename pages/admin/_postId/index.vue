<template>
  <div class="adim-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm';
import axios from 'axios';

export default {
  layout: 'admin',
  components: {
    AdminPostForm,
  },
  asyncData(context) {
    return axios
      .get(
        `https://noahs-nuxt-project.firebaseio.com/posts/${context.params.postId}.json`
      )
      .then(({ data }) => {
        console.log(data);
        return {
          loadedPost: data,
        };
      })
      .catch(e => context.error(e));
  },
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
