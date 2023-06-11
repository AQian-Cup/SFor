<template>
  <div class="header">
    <div class="logo"></div>
    <div class="navArray">
      <template v-for="(navItem, index) of navArray">
        <div
          v-if="navItem"
          :key="index"
          class="navItem"
          @click="handleNav(navItem)"
        >
          {{ navItem }}
        </div>
        <ElDivider v-else direction="vertical"></ElDivider>
      </template>
    </div>
    <div class="icons">
      <ElIcon
        v-for="icon in iconArray"
        :size="iconSize"
        @click="handleIcon(icon)"
      >
        <component :is="icon"></component>
      </ElIcon>
    </div>
    <ElAvatar
      :size="avatarSize"
      class="avatar"
      :src="avatar"
    >
      <ElIcon v-if="data" class="signOut" @click="signOut">
        <ElIconCloseBold></ElIconCloseBold>
      </ElIcon>
    </ElAvatar>
  </div>
</template>
<script lang="ts" setup>
interface iconType {
  name: string;
}
const { data, signOut } = useAuth();
const { data: profile } = useFetch(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  `/api/user/${(data.value?.user as any).id}/profile`,
);
const navArray = ref<Array<string>>(["首页", "", "活动"]);
const iconArray = shallowRef<Array<unknown>>([
  ElIconSetting,
  ElIconMessageBox,
  ElIconUser,
]);
const iconSize = ref<number>(20);
const avatarSize = computed(() => {
  return (iconSize.value * 8) / 5;
});
const handleNav = (nav: string) => {
  const routeObject: { [key: string]: string } = {
    首页: "/",
    活动: "/events",
  };
  return navigateTo({
    path: routeObject[nav],
  });
};
const handleIcon = (icon: unknown) => {
  const functionObject: { [key: string]: () => void } = {
    // Setting: goSetting,
    MessageBox: goMessage,
    User: goUser,
  };
  const name = (icon as iconType).name;
  if (name) {
    functionObject[name]();
  }
};
// const goSetting = () => {};
const goMessage = () => {
  return navigateTo({
    path: `/message`,
  });
};
const goUser = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { id } = data.value?.user as any;
  return navigateTo({
    path: `/user/${id}`,
  });
};
const avatar = computed(() => {
  return "/user/" + profile.value?.avatar;
});
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
  border-bottom: 2px solid var(--el-color-info-light-7);
}
.navArray {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin-right: auto;
}
.navItem {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  cursor: pointer;
  transition: all 0.3s ease;
}
.navItem:hover,
.navItem:focus,
.navItem:active {
  color: var(--el-text-color-primary);
}
.icons {
  display: inline-flex;
}
.icons i {
  margin-right: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.icons i:hover {
  color: var(--el-text-color-primary);
}
.avatar {
  position: relative;
  cursor: pointer;
}
.avatar:hover .signOut {
  right: 0;
}
.signOut {
  position: absolute;
  transition: all 0.3s ease-out;
  right: -100%;
  width: 100%;
  aspect-ratio: 1;
}
</style>
