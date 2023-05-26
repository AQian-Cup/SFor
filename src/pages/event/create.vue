<template>
  <div class="create">
    <ElForm :model="form" label-width="100px">
      <ElFormItem label="活动名称">
        <ElInput v-model="form.eventName"></ElInput>
      </ElFormItem>
      <ElFormItem label="所属学校">
        <ElInput v-model="form.university"></ElInput>
      </ElFormItem>
      <ElFormItem label="所属学院">
        <ElInput v-model="form.college"></ElInput>
      </ElFormItem>
      <ElFormItem label="学分">
        <ElInputNumber
          v-model="form.credit"
        ></ElInputNumber>
      </ElFormItem>
      <ElFormItem label="活动时间">
        <ElDatePicker
          v-model="form.startTime"
          type="date"
        ></ElDatePicker>
        <ElDatePicker
          v-model="form.endTime"
          type="date"
        ></ElDatePicker>
      </ElFormItem>
      <ElFormItem label="活动简介">
        <ElInput
          v-model="form.introdution"
          type="textarea"
          resize="none"
          :rows="4"
        ></ElInput>
      </ElFormItem>
      <ElFormItem label="上传图片">
        <ElUpload
          ref="uploadRef"
          v-model:file-list="fileList"
          list-type="picture-card"
          multiple
          action="#"
          :http-request="upload"
          :auto-upload="false"
          :limit="5"
        >
          <ElIcon>
            <ElIconPlus></ElIconPlus>
          </ElIcon>
        </ElUpload>
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" @click="submit"
          >提交</ElButton
        >
      </ElFormItem>
    </ElForm>
  </div>
</template>
<script lang="ts" setup>
import {
  UploadInstance,
  UploadRequestOptions,
  UploadUserFile,
} from "element-plus";

const { data } = useAuth();
const form = ref({
  eventName: "",
  university: "",
  college: "",
  credit: 0,
  startTime: "",
  endTime: "",
  introdution: "",
});
const upload = async (options: UploadRequestOptions) => {
  const formData = new FormData();
  formData.append("file", options.file);
  await useFetch(`/api/event/${eventId.value}/upload`, {
    method: "post",
    body: formData,
  });
};
const submit = async () => {
  const body = { ...form.value, ...data.value?.user };
  const { data: event } = await useFetch(
    `/api/event/create`,
    {
      method: "post",
      body,
    },
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventId.value = (event.value?.value as any).id;
  uploadRef.value?.submit();
};
const uploadRef = ref<UploadInstance>();
const fileList = ref<UploadUserFile[]>([]);
const eventId = ref(0);
</script>
<style scoped>
.create {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}
.create > * {
  width: 50%;
}
</style>
