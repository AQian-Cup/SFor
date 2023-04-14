<template>
  <div class="header">
    <div class="logo"></div>
    <div class="navArray">
      <template v-for="(navItem, index) of navArray">
        <div v-if="navItem" :key="index" class="navItem">
          {{ navItem }}
        </div>
        <ElDivider v-else direction="vertical"></ElDivider>
      </template>
    </div>
    <ElAvatar :size="36" class="avatar"></ElAvatar>
  </div>
</template>
<script lang="ts" setup>
const navArray = ref<Array<string>>([
  "首页",
  "",
  "活动",
  "",
  "资讯",
]);
</script>
<style scoped>
.header {
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 0px 18%;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: var(--el-text-color-secondary);
}
.navArray {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
}
.navItem {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  cursor: pointer;
}
.navItem:hover,
.navItem:focus,
.navItem:active {
  color: var(--el-text-color-regular);
}
.avatar {
  cursor: pointer;
}
</style>
