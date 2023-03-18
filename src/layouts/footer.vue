<template>
  <div class="footer">
    <div class="info">
      <div class="logos">
        <img
          v-for="logo of info.logos"
          :src="logo.imageUrl"
          :alt="logo.name"
          class="logo"
        />
      </div>
      <div class="presentations">
        <div
          v-for="presentation of info.presentations"
          class="presentation"
        >
          {{ presentation }}
        </div>
      </div>
    </div>
    <div class="moreArray">
      <div v-for="moreItem of moreArray" class="moreItem">
        {{ moreItem.name }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface logoType {
  name: string;
  imageUrl: string | undefined;
}
interface infoType {
  logos?: Array<logoType>;
  presentations?: Array<string>;
}
interface moreItemType {
  name: string;
  subNames?: Array<string>;
}

const info = ref<infoType>({
  logos: [
    { name: "学校", imageUrl: "" },
    { name: "个人", imageUrl: "" },
  ],
  presentations: ["1", "2", "3"],
});

const moreArray = ref<Array<moreItemType>>([
  {
    name: "了解我们",
  },
  {
    name: "社区文化",
    subNames: ["test1", "test2"],
  },
  {
    name: "加入我们",
  },
]);
</script>
<style scoped>
.footer {
  width: 100%;
  height: 240px;
  padding: 60px 30%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid var(--el-color-warning-light-5);
  color: var(--el-text-color-secondary);
  background-color: var(--el-bg-color-page);
}
.info {
  display: flex;
  width: 240px;
  flex-direction: column;
}
.logos {
  display: flex;
}
.logo {
  width: 60px;
  height: 60px;
}
.logo + .logo {
  margin-left: 30px;
}
.presentations {
  display: flex;
}
.presentation + .presentation {
  margin-left: 18px;
}
.moreArray {
  display: flex;
  flex-direction: column;
}
.moreItem {
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  z-index: 1;
}

.moreItem::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--el-border-color-dark);
  transform: translateX(-101%);
  transition: all 0.3s;
  z-index: -1;
}

.moreItem:hover::before {
  transform: translateX(0);
}
</style>
