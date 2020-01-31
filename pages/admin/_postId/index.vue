<template>
  <div class="adim-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm';

export default {
  layout: 'admin',
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        author: 'Noah',
        title: 'My Awesome Post',
        content: 'THIS IS A GREAT POST HOLY SHIT',
        thumbnailLink:
          'https://www-tc.pbs.org/wgbh/nova/media/images/nova-wonders-can-we-build-a-brain-hero_xn7Rr8X.width-800.jpg',
      },
    };
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
