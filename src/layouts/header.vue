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
    <div class="message"></div>
    <div class="avatar"></div>
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
  height: 48px;
  padding: 0px 18%;
  display: flex;
  align-items: center;
  font-size: 16px;
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
}
.navItem:hover,
.navItem:focus,
.navItem:active {
  color: var(--el-text-color-regular);
}
.message {
  margin-left: auto;
}
</style>
