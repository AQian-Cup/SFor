<template>
  <div class="infomation">
    <div class="leftPart">
      <ElCarousel height="300px" class="carousel">
        <ElCarouselItem v-for="item in infomation?.images">
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
</template>
<script lang="ts" setup>
const { data } = useAuth();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { id } = data.value?.user as any;
const route = useRoute();
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
</style>
