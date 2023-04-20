<template>
  <div class="homeList">
    <div class="listHeader">
      <div class="headerText">{{ headerText }}</div>
      <ElIcon :size="iconSize">
        <ElIconRefresh></ElIconRefresh>
      </ElIcon>
      <div class="switch">
        <div
          v-for="item in switchArray"
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
  </div>
</template>
<script lang="ts" setup>
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
</script>
<style scoped>
.listHeader {
  display: flex;
  align-items: center;
}
.headerText {
  margin-right: auto;
}
.switch {
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: pointer;
}
.slider {
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0;
  left: 0;
  z-index: -1;
  background: var(--el-color-primary);
  transition: all 0.2s ease;
}
.sliderLocation {
  transform: translateX(100%);
}
</style>
