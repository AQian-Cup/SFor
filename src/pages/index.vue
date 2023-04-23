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
      <template v-if="postArray.length">
        <HomePost
          v-for="item in postArray"
          :post="item"
        ></HomePost>
      </template>
      <template v-else>
        <el-skeleton :rows="5" animated></el-skeleton>
      </template>
    </div>
    <div class="rightPart">
      <HomeList></HomeList>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface imageType {
  url: string;
  alt: string;
}
interface postType {
  postId: string | number;
  title: string;
  content: string;
  source: string;
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
const postArray = ref<Array<postType>>([
  {
    postId: "1",
    title: "标题",
    content: "内容",
    source: "来源",
  },
  {
    postId: "1",
    title: "标题",
    content: "内容",
    source: "来源",
  },
  {
    postId: "1",
    title: "标题",
    content: "内容",
    source: "来源",
  },
]);
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
