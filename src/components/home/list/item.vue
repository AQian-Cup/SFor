<template>
  <div class="item">
    <div class="title">{{ item.title }}</div>
    <ElIcon color="var(--el-color-primary)">
      <ElIconView></ElIconView>
    </ElIcon>
    <div class="iconText">{{ item.views }}</div>
    <ElIcon color="var(--el-color-primary)">
      <ElIconChatSquare></ElIconChatSquare>
    </ElIcon>
    <div class="iconText">{{ item.comments }}</div>
    <div v-if="!isLast" class="divider"></div>
  </div>
</template>
<script lang="ts" setup>
interface itemType {
  title: string;
  views: number;
  comments: number;
}
defineProps<{ item: itemType; isLast: boolean }>();
</script>
<style scoped>
.item {
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px;
  line-height: 1em;
  cursor: pointer;
  transition: all 0.3s ease;
}
.item:hover {
  background: var(--el-color-info-light-9);
}
.title {
  margin-right: auto;
}
/* 此处设置图标与数字的间隙 */
.item > *:not(:first-child) {
  margin-left: 5px;
}
.iconText {
  color: var(--el-color-primary);
}
.divider {
  position: absolute;
  bottom: 0;
  left: 5%;
  width: 90%;
  height: 1px;
  background: var(--el-border-color-light);
}
</style>
