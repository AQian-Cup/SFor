<template>
  <div class="reply">
    <div class="replyUser">
      <ElAvatar
        :size="32"
        :src="props.replyUserAvatar ?? ''"
      ></ElAvatar>
      <div class="username">{{ props.replyUsername }}</div>
    </div>
    <ElDivider></ElDivider>
    <div class="replyContent">{{ props.replyContent }}</div>
    <div class="replyButton" @click="reply">回复</div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  replyUserId?: number;
  replyContent?: string;
  replyUsername?: string;
  replyUserAvatar?: string;
}>();
const emits = defineEmits<{
  (e: "reply"): void;
}>();
const reply = () => {
  emits("reply");
};
</script>
<style scoped>
.reply {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 120px;
  background: var(--el-fill-color-lighter);
}
.reply > .el-divider--horizontal {
  margin: 0;
}
.replyUser {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex: 2;
  padding: 0 10px;
}
.username {
  margin-left: 10px;
  font-weight: bold;
  line-height: 1em;
}
.replyContent {
  box-sizing: border-box;
  flex: 3;
  padding: 10px;
}
.replyButton {
  position: absolute;
  padding: 4px 8px;
  right: 0;
  bottom: 0;
  cursor: pointer;
}
</style>
