<template>
  <div class="home">
    <div class="leftPart">
      <ElCarousel height="400px" class="carousel">
        <ElCarouselItem v-for="item in imageUrlArray">
          <ElImage
            class="image"
            :src="item.url"
            :alt="item.alt"
            fit="fill"
          >
          </ElImage>
        </ElCarouselItem>
      </ElCarousel>
      <template v-if="eventArray?.length">
        <HomePost
          v-for="item in eventArray"
          :id="item.id"
          :title="item.name"
          :content="item.introdution"
          :source="item.source.name"
        ></HomePost>
      </template>
      <template v-else>
        <ElSkeleton :rows="5" animated></ElSkeleton>
      </template>
    </div>
    <div class="rightPart">
      <HomeProgress></HomeProgress>
      <HomeList></HomeList>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface imageType {
  url: string;
  alt: string;
}
const imageUrlArray = ref<Array<imageType>>([
  {
    url: "",
    alt: "图片1",
  },
  {
    url: "",
    alt: "图片2",
  },
  {
    url: "",
    alt: "图片3",
  },
]);
const { data: eventArray } = await useFetch(
  `/api/event/events`,
);
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 0;
}
.home > div {
  display: flex;
  flex-direction: column;
}
.leftPart {
  width: 45%;
  margin-right: 0.5%;
}
.carousel {
  margin-bottom: 20px;
}
.image {
  width: 100%;
  height: 100%;
}
.rightPart {
  width: 25%;
  margin-left: 0.5%;
}
</style>
