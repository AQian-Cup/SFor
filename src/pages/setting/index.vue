<template>
  <div class="setting">
    <div class="panel">
      <div class="leftPart">
        <ElAvatar
          :size="300"
          :src="avatar"
          shape="square"
        ></ElAvatar>
        <ElUpload
          ref="uploadRef"
          v-model:file-list="avatarUploadList"
          action="#"
          :http-request="avatarUpload"
        >
          <ElButton>上传头像</ElButton>
        </ElUpload>
      </div>
      <div class="rightPart"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  UploadRequestOptions,
  UploadUserFile,
} from "element-plus";

const { data } = useAuth();
const { data: profile } = useFetch(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  `/api/user/${(data.value?.user as any).id}/profile`,
);
const avatar = computed(
  () => "/user/" + profile.value?.avatar,
);
const avatarUploadList = ref<UploadUserFile[]>([]);
const avatarUpload = async (
  options: UploadRequestOptions,
) => {
  const formData = new FormData();
  formData.append("file", options.file);
  await useFetch(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    `/api/user/${(data.value?.user as any).id}/avatar`,
    {
      method: "post",
      body: formData,
    },
  );
};
</script>
<style scoped>
.setting {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}
.setting > div {
  box-sizing: border-box;
  width: 65%;
  border: 1px solid var(--el-border-color-light);
  border-radius: 4px;
}
.panel {
  display: flex;
  height: 960px;
}
.panel > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.leftPart {
  flex: 1;
  background: var(--el-fill-color-dark);
  padding: 30px 0;
}
.leftPart > * + * {
  margin-top: 20px;
}
.rightPart {
  flex: 2;
  padding: 30px;
}
</style>
