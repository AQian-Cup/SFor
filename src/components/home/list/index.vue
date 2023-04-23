<template>
  <div class="homeList">
    <div class="header">
      <div class="headerText">{{ headerText }}</div>
      <ElIcon :size="iconSize" class="icon">
        <ElIconRefresh></ElIconRefresh>
      </ElIcon>
      <div class="switch">
        <div
          v-for="item in switchArray"
          class="switchItem"
          @click="handleSwitch($event)"
        >
          {{ item }}
        </div>
        <div
          class="slider"
          :class="switchValue ? 'sliderLocation' : ''"
        ></div>
      </div>
    </div>
    <div class="body">
      <HomeListItem
        v-for="(item, index) in listArray"
        :item="item"
        :is-last="
          index === listArray.length - 1 ? true : false
        "
      ></HomeListItem>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface itemType {
  title: string;
  views: number;
  comments: number;
}
const headerText = ref<string>("榜单");
const iconSize = ref<number>(20);
const switchArray = ref<Array<string>>(["热门", "最新"]);
const switchValue = ref<boolean>(false);
const handleSwitch = (event: MouseEvent) => {
  if (
    (event.target as HTMLInputElement).innerHTML ===
    switchArray.value[0]
  ) {
    switchValue.value = false;
  } else {
    switchValue.value = true;
  }
};
const listArray = ref<Array<itemType>>([
  { title: "标题", views: 0, comments: 0 },
  { title: "标题", views: 0, comments: 0 },
]);
</script>
<style scoped>
.homeList {
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid var(--el-border-color-light);
}
.header {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid var(--el-border-color-light);
}
.headerText {
  margin-right: auto;
}
.icon {
  margin-right: 5px;
  cursor: pointer;
  color: var(--el-color-info-light-5);
  transition: all 0.3s ease;
}
.icon:hover {
  color: var(--el-color-black);
}
.switch {
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  border: 1px solid var(--el-border-color-light);
}
.switchItem {
  padding: 3px;
}
.slider {
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0;
  left: 0;
  z-index: -1;
  background: var(--el-color-primary);
  transition: all 0.3s ease;
}
.sliderLocation {
  transform: translateX(100%);
}
</style>
