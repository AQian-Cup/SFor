<template>
  <div class="user">
    <div class="profile">
      <ElImage class="profileImage"></ElImage>
      <div v-if="user" class="profileText">
        <div>姓名：{{ user.name }}</div>
        <div>年龄：{{ user.age }}</div>
        <div>学校：{{ user.university }}</div>
        <div>学院：{{ user.college }}</div>
        <div>班级：{{ user.classGroup }}</div>
        <div>入学时间：{{ user.admissionTime }}</div>
      </div>
      <ElSkeleton v-else :rows="6" animated></ElSkeleton>
    </div>
    <ElTabs
      v-model="activeTabName"
      type="border-card"
      class="events"
      :stretch="true"
    >
      <ElCard
        v-show="activeTabName"
        shadow="hover"
        class="event"
        :body-style="{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px',
          height: '100%',
        }"
        @click="goCreate"
      >
        <ElIcon
          size="3em"
          color="var(--el-fill-color-darker)"
        >
          <ElIconPlus></ElIconPlus>
        </ElIcon>
      </ElCard>
      <ElCard
        v-for="event in events"
        class="event"
        shadow="hover"
        :body-style="{
          display: 'flex',
          flexDirection: 'column',
          padding: '0px',
          height: '100%',
        }"
        @click="goEvent(event.id)"
      >
        <ElImage class="eventImage"></ElImage>
        <div class="eventText">{{ event.name }}</div>
      </ElCard>
      <ElTabPane
        v-for="(item, index) in tabPaneArray"
        :label="item"
        :name="index"
        :style="{ display: 'none' }"
      >
      </ElTabPane>
    </ElTabs>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const { data: user } = await useFetch(
  `/api/user/${route.params.id}/profile`,
);
const activeTabName = ref(0);
const tabPaneArray = ["已参加活动", "已创建活动"];
const { data: events } = await useFetch(
  `/api/user/${route.params.id}/events`,
  {
    query: {
      kind: activeTabName,
    },
    watch: [activeTabName],
  },
);
const goCreate = () => {
  return navigateTo({
    path: `/event/create`,
  });
};
const goEvent = (id: number) => {
  if (activeTabName.value) {
    return navigateTo({
      path: `/event/${id}/admin`,
    });
  }
  return navigateTo({
    path: `/event/${id}`,
  });
};
</script>
<style scoped>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}
.user > div {
  box-sizing: border-box;
  width: 65%;
  border: 1px solid var(--el-border-color-light);
  border-radius: 4px;
}

.profile {
  display: flex;
  height: 360px;
  margin-bottom: 20px;
  padding: 30px;
}
.profileImage {
  width: 300px;
  height: 300px;
}
.profileText {
  flex: 1;
  display: grid;
  grid: repeat(3, 1fr) / repeat(2, 1fr);
  padding: 0 40px;
}
.profileText > div {
  display: flex;
  align-items: center;
}
.events {
  height: 720px;
}
:deep(.events) > .el-tabs__content {
  display: grid;
  grid: repeat(auto-fill, 300px) / repeat(3, 1fr);
  gap: 20px;
}
.event {
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.eventImage {
  width: 100%;
  aspect-ratio: 16 / 9;
}
.eventText {
  display: flex;
  flex: 1;
  padding: 10px;
  align-items: center;
  font-weight: bolder;
}
</style>
