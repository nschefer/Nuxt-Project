<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList';

export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(new Error(), {
        loadedPosts: [
          {
            id: '1',
            title: 'First Post',
            previewText: 'This is our first post',
            thumbnail:
              'https://bentrepreneur.biz/wp-content/uploads/2019/02/tech-1000x624.jpg',
          },
          {
            id: '2',
            title: 'Second Post',
            previewText: 'This is our second post',
            thumbnail:
              'https://bentrepreneur.biz/wp-content/uploads/2019/02/tech-1000x624.jpg',
          },
        ],
      });
    }, 1500);
  },
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
