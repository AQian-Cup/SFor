<template>
  <div class="event">
    <div class="infomation">
      <div class="leftPart">
        <ElCarousel height="300px" class="carousel">
          <ElCarouselItem
            v-for="item in infomation?.images"
          >
            <ElImage
              class="image"
              :src="item"
              alt="活动图片"
              fit="fill"
            >
            </ElImage>
          </ElCarouselItem>
        </ElCarousel>
        <div class="moreMessage">
          <div>学校：{{ infomation?.university }}</div>
          <div>学院：{{ infomation?.college }}</div>
          <div>学分：{{ infomation?.credit }}</div>
          <div>创建者：{{ infomation?.source?.name }}</div>
          <div>开始时间：{{ infomation?.startTime }}</div>
          <div>结束时间：{{ infomation?.endTime }}</div>
        </div>
      </div>
      <div class="rightPart">
        <div class="introdution">
          {{ infomation?.introdution }}
        </div>
        <button
          v-if="!isJoin"
          class="joinButton"
          @click="join"
        >
          报名
        </button>
        <ElDivider v-else>已报名</ElDivider>
      </div>
    </div>
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
const { data } = useAuth();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { id } = data.value?.user as any;
const route = useRoute();
const input = ref("");
const { data: infomation } = await useFetch(
  `/api/event/${route.params.id}/infomation`,
);
const { data: isJoin } = await useFetch(
  `/api/event/${id}/isJoin`,
  {
    query: {
      eventId: route.params.id,
    },
  },
);
const join = async () => {
  const { data: result } = await useFetch(
    `/api/user/${id}/join`,
    {
      method: "post",
      body: {
        eventId: route.params.id,
      },
    },
  );
  if (result.value) {
    ElMessage({
      message: "报名成功",
      type: "success",
    });
  }
};
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
.infomation {
  display: flex;
  height: 480px;
  padding: 15px;
}
.infomation > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.carousel {
  height: 300px;
  aspect-ratio: 16 / 9;
  margin-bottom: auto;
}
.image {
  width: 100%;
  height: 100%;
}
.moreMessage {
  display: grid;
  grid: repeat(3, 1fr) / repeat(2, 1fr);
  grid-auto-flow: column;
  box-sizing: border-box;
  border: 1px solid var(--el-border-color-light);
  background: var(--el-color-primary-light-8);
  margin-top: 10px;
  width: 100%;
  height: 132px;
  border-radius: 3px;
}
.moreMessage > * {
  display: flex;
  align-items: center;
  padding: 0 5px;
}
.rightPart {
  margin-left: 15px;
  flex: 1;
}
.rightPart > * {
  width: 100%;
}
.introdution {
  box-sizing: border-box;
  height: 360px;
}
.joinButton {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0.5em 0;
  border: 2px solid #2c9caf;
  border-radius: 5px;
  font-weight: bold;
  font-size: 24px;
  text-indent: 1.5em;
  letter-spacing: 1.5em;
  color: #2c9caf;
  transition: all 1.5s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.joinButton:hover {
  color: #ffffff;
  transform: scale(1.05);
  border: 2px solid #70bdca;
  box-shadow: 4px 5px 17px -4px #268391;
}
.joinButton::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #2c9caf;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1.5s;
}
.joinButton:hover::before {
  width: 250%;
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
