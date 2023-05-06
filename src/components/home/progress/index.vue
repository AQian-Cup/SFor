<template>
  <div class="progress">
    <template v-if="progressArray && task">
      <div class="display">
        <ElProgress
          v-for="item in progressArray"
          type="dashboard"
          :percentage="item.value"
          :color="item.color"
        >
          <template #default="{ percentage }">
            <div class="percentage-value">
              {{ percentage }}%
            </div>
            <div class="percentage-content">
              {{ item.content }}
            </div>
          </template>
        </ElProgress>
        <div class="divider"></div>
      </div>
      <div class="task">当前推荐：{{ task }}</div>
    </template>
    <template v-else>
      <ElSkeleton :rows="4" animated></ElSkeleton>
    </template>
  </div>
</template>
<script lang="ts" setup>
interface progressType {
  value: number;
  color: string;
  content: string;
}
const progressArray = ref<Array<progressType>>([
  {
    value: 20,
    color: "blue",
    content: "当前学分",
  },
  {
    value: 40,
    color: "red",
    content: "",
  },
  {
    value: 60,
    color: "gold",
    content: "",
  },
]);
const task = ref<string>("支教");
onMounted(() => {
  console.log(1);
});
</script>
<style scoped>
.progress {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid var(--el-border-color-light);
  padding: 0 20px;
  margin-bottom: 20px;
}
.display {
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}
.display > div:not(.divider) {
  cursor: pointer;
}
:deep(.el-progress__text) > div + div {
  margin-top: 10px;
}
.divider {
  position: absolute;
  bottom: 0;
  left: 2%;
  width: 96%;
  height: 2px;
  border-radius: 1px;
  background: var(--el-border-color-light);
}
.task {
  display: flex;
  align-items: center;
  line-height: 1em;
  padding: 20px 5px;
}
</style>
