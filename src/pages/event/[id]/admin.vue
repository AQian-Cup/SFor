<template>
  <div class="admin">
    <EventInfomation></EventInfomation>
    <ElTable :data="participants!" border stripe>
      <ElTableColumn
        prop="university"
        label="学校"
      ></ElTableColumn>
      <ElTableColumn
        prop="college"
        label="学院"
      ></ElTableColumn>
      <ElTableColumn
        prop="name"
        label="姓名"
      ></ElTableColumn>
      <ElTableColumn prop="id" label="id"></ElTableColumn>
      <ElTableColumn label="操作">
        <template #default="scope">
          <ElButton
            v-if="!scope.row?.isFinish"
            @click="finish(scope.row)"
            >完成</ElButton
          >
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const { data: participants } = await useFetch(
  `/api/event/${route.params.id}/participants`,
);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const finish = async (participant: any) => {
  await useFetch(`/api/event/${route.params.id}/finish`, {
    query: {
      id: participant.id,
    },
  });
  participant.isFinish = true;
};
</script>
<style scoped>
.admin {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}
.admin > * {
  box-sizing: border-box;
  width: 65%;
  border: 1px solid var(--el-border-color-light);
  border-radius: 4px;
}
.admin > * + * {
  margin-top: 20px;
}
</style>
