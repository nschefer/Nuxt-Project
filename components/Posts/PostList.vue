<template>
  <section class="posts-list">
      <PostPreview
        id="1"
        thumbnail="https://bentrepreneur.biz/wp-content/uploads/2019/02/tech-1000x624.jpg"
        title="Hello There!"
        previewText="This is my first post!" />
      <PostPreview
        id="2"
        thumbnail="https://bentrepreneur.biz/wp-content/uploads/2019/02/tech-1000x624.jpg"
        title="Hello There from the Future!"
        previewText="This is my second post!" />
      <PostPreview
        id="1"
        thumbnail="https://bentrepreneur.biz/wp-content/uploads/2019/02/tech-1000x624.jpg"
        title="Hello There from the Past !"
        previewText="This is my third post!" />
    </section>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview';

export default {
  components: {
    PostPreview,
  },
};
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
