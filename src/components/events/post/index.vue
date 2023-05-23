<template>
  <ElCard class="post" shadow="hover" @click="goEvent">
    <template #header>
      <div class="header">
        <div class="title">{{ title }}</div>
        <div class="source">{{ source }}</div>
      </div>
    </template>
    <div class="content">{{ content }}</div>
  </ElCard>
</template>
<script lang="ts" setup>
interface postType {
  id: string | number;
  title: string;
  content: string;
  source: string;
}
const props = defineProps<postType>();
const goEvent = () => {
  return navigateTo({
    path: `/event/${props.id}`,
  });
};
</script>
<style scoped>
.post {
  height: 200px;
  cursor: pointer;
}
.post + .post {
  margin-top: 20px;
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
