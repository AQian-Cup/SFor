<template>
  <div class="events">
    <div class="selectPart">
      <ElSelect
        v-model="universitySelected"
        placeholder="所属学校"
        size="large"
        clearable
      >
        <ElOption
          v-for="item in universityArray"
          :label="item"
          :value="item"
        ></ElOption>
      </ElSelect>
      <ElSelect
        v-model="collegeSelected"
        placeholder="所属学院"
        size="large"
        clearable
      >
        <ElOption
          v-for="item in collegeArray"
          :label="item"
          :value="item"
        ></ElOption>
      </ElSelect>
      <ElSelect
        v-model="sortSelected"
        placeholder="排序方式"
        size="large"
        clearable
      >
        <ElOption
          v-for="item in sortArray"
          :label="item"
          :value="item"
        ></ElOption>
      </ElSelect>
    </div>
    <EventsPost
      v-for="item in eventArray"
      :id="item.id"
      :title="item.name"
      :content="item.introdution"
      :source="item.source.name"
    ></EventsPost>
  </div>
</template>
<script lang="ts" setup>
const universitySelected = ref("");
const collegeSelected = ref("");
const sortSelected = ref("");
const sortArray = ref(["按时间升序", "按时间降序"]);
const { data: universityArray } = useFetch(
  `/api/event/select/options`,
  {
    query: {
      field: "university",
    },
  },
);
const { data: collegeArray } = useFetch(
  `/api/event/select/options`,
  {
    query: {
      field: "college",
    },
  },
);
const { data: eventArray } = useFetch(`/api/event/events`, {
  query: {
    university: universitySelected,
    college: collegeSelected,
    sort: sortSelected,
  },
  watch: [
    universitySelected,
    collegeSelected,
    sortSelected,
  ],
});
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}
.events > div {
  width: 65%;
}
.selectPart {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
}
.selectPart > div + div {
  margin-left: 20px;
}
</style>
