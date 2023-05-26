<template>
  <div class="event">
    <EventInfomation></EventInfomation>
    <div class="reviewInput">
      <ElInput
        v-model="input"
        type="textarea"
        placeholder="在此输入你想说的话"
        :autosize="{ minRows: 3 }"
        resize="none"
      >
      </ElInput>
      <button
        class="reviewButton"
        :class="{ reviewButtonShow: input }"
      >
        发送
      </button>
    </div>
    <div class="review">
      <div class="reviewUser">
        <ElAvatar :size="32"></ElAvatar>
        <div class="username">测试用户</div>
      </div>
      <ElDivider></ElDivider>
      <div class="reviewContent"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const input = ref("");
</script>
<style scoped>
.event {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}
.event > div {
  box-sizing: border-box;
  width: 65%;
  border: 1px solid var(--el-border-color-light);
  border-radius: 4px;
}
.event > div + div {
  margin-top: 20px;
}
.reviewInput {
  position: relative;
  overflow: hidden;
}
.reviewButton {
  box-sizing: border-box;
  display: inline-block;
  padding: 6px 12px;
  border: 1px solid var(--el-border-color-light);
  border-bottom-right-radius: 2px;
  transition: all 0.2s ease-in, right 1s ease-in-out;
  position: absolute;
  bottom: 1px;
  overflow: hidden;
  color: black;
  z-index: 1;
  background: transparent;
  cursor: pointer;
}

.reviewButton:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.reviewButton:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #39bda7;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.reviewButton:hover {
  color: #ffffff;
  border: 1px solid #39bda7;
}

.reviewButton:hover:before {
  top: -35%;
  background-color: #39bda7;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.reviewButton:hover:after {
  top: -45%;
  background-color: #39bda7;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}
.reviewButtonShow {
  right: 1px;
}
.review {
  display: flex;
  flex-direction: column;
  height: 120px;
  background: var(--el-fill-color-lighter);
}
.review > .el-divider--horizontal {
  margin: 0;
}
.reviewUser {
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
.reviewContent {
  box-sizing: border-box;
  flex: 3;
  padding: 10px;
}
</style>
