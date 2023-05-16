<template>
  <div class="message">
    <ElTabs type="border-card" class="messageBox">
      <ElTabPane
        v-for="item in tabPaneArray"
        :label="item.label"
      >
        <ElCard
          v-for="messageItem in item.content"
          class="messageItem"
          shadow="hover"
        >
          <template #header>
            <div class="source">
              <ElAvatar
                :src="messageItem.source.avatar"
                :size="36"
              ></ElAvatar>
              <div>
                {{ messageItem.source.name }}
              </div>
            </div>
            <div class="title">{{ messageItem.title }}</div>
          </template>
          {{ messageItem.type }}
        </ElCard>
      </ElTabPane>
    </ElTabs>
  </div>
</template>
<script lang="ts" setup>
const { data } = useAuth();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { id } = data.value?.user as any;
const { data: allMessage } = await useFetch(
  `/api/message/user/${id}`,
);
const userMessage = computed(() => {
  return allMessage.value?.filter((i) => i.type === "user");
});
const schoolMessage = computed(() => {
  return allMessage.value?.filter(
    (i) => i.type === "school",
  );
});
const systemMessage = computed(() => {
  return allMessage.value?.filter(
    (i) => i.type === "system",
  );
});
const tabPaneArray = ref([
  { label: "全部消息", content: allMessage },
  { label: "用户消息", content: userMessage },
  { label: "校方消息", content: schoolMessage },
  { label: "系统消息", content: systemMessage },
]);
</script>
<style scoped>
.message {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}
.messageBox {
  display: flex;
  flex-direction: column;
  width: 65%;
  min-height: 960px;
}
:deep(.messageBox) > .el-tabs__content {
  box-sizing: border-box;
  flex: 1;
}
:deep(.messageBox) .messageItem {
  height: 180px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
:deep(.messageBox) .messageItem + .messageItem {
  margin-top: 15px;
}
:deep(.messageBox) .el-card__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
}
:deep(.messageBox) .el-card__body {
  flex: 1;
}
.source {
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.source > div {
  margin-top: 5px;
  font-size: 12px;
}
.title {
  margin: 0 0 0 15px;
  font-weight: bolder;
}
</style>
