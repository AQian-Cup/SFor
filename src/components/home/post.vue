<template>
  <ElCard class="post" shadow="hover">
    <template #header>
      <div class="header">
        <div class="title">{{ post.title }}</div>
        <div class="source">{{ post.source }}</div>
      </div>
    </template>
    <div class="content">{{ post.content }}</div>
  </ElCard>
</template>
<script lang="ts" setup>
interface postType {
  postId: string | number;
  title: string;
  content: string;
  source: string;
}
interface propType {
  post: postType;
}
defineProps<propType>();
</script>
<style scoped>
.post {
  height: 200px;
  cursor: pointer;
}
.post + .post {
  margin-top: 10px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-weight: bold;
}
</style>
