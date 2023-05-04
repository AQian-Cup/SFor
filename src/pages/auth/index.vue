<template>
  <div class="auth">
    <div class="main">
      <div class="authPart">
        <div>{{ registerTextArray[0] }}</div>
        <div
          v-for="item in registerInputArray"
          class="input"
        >
          <div>{{ item.label }}</div>
          <ElInput
            v-model="item.model"
            :type="item.type"
            :show-password="item.showPassword"
          ></ElInput>
        </div>
        <ElButton @click="handleRegister()">{{
          registerTextArray[1]
        }}</ElButton>
        <ElButton @click="handleChange">
          {{ registerTextArray[2] }}
          <ElIcon class="icon">
            <ElIconRight></ElIconRight>
          </ElIcon>
        </ElButton>
      </div>
      <div class="authPart">
        <div>{{ loginTextArray[0] }}</div>
        <div v-for="item in loginInputArray" class="input">
          <div>{{ item.label }}</div>
          <ElInput
            v-model="item.model"
            :type="item.type"
            :show-password="item.showPassword"
          ></ElInput>
        </div>
        <ElButton @click="handleLogin()">{{
          loginTextArray[1]
        }}</ElButton>
        <ElButton @click="handleChange">
          {{ loginTextArray[2] }}
          <ElIcon class="icon">
            <ElIconBack></ElIconBack>
          </ElIcon>
        </ElButton>
      </div>
      <div
        class="cover"
        :class="isMove ? 'coverMove' : ''"
      ></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});
const { signIn } = useAuth();
const registerTextArray = ref<Array<string>>([
  "注册",
  "注册",
  "已经注册？前往登录",
]);
const loginTextArray = ref<Array<string>>([
  "登录",
  "登录",
  "还未注册？前往注册",
]);
const registerInputArray = ref([
  {
    label: "邮箱：",
    type: "text",
    model: "",
    showPassword: false,
  },
  {
    label: "用户名：",
    type: "text",
    model: "",
    showPassword: false,
  },
  {
    label: "密码：",
    type: "password",
    model: "",
    showPassword: true,
  },
  {
    label: "确认密码：",
    type: "password",
    model: "",
    showPassword: true,
  },
]);
const loginInputArray = ref([
  {
    label: "邮箱：",
    type: "text",
    model: "",
    showPassword: false,
  },
  {
    label: "密码：",
    type: "password",
    model: "",
    showPassword: true,
  },
]);
const isMove = ref<boolean>(false);
const handleChange = () => {
  isMove.value = !isMove.value;
};
const handleRegister = () => {
  console.log("register");
};
const handleLogin = () => {
  signIn("credentials", {
    email: loginInputArray.value[0].model,
    password: loginInputArray.value[1].model,
  });
};
</script>
<style scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.main {
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 960px;
  height: 540px;
  border-radius: 9px;
  overflow: hidden;
  border: 3px solid var(--el-color-primary);
}
.authPart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  padding: 0 5%;
}
.input {
  display: flex;
  align-items: center;
}
.input > div {
  min-width: 80px;
}
.authPart > * {
  margin-top: 5%;
}
.authPart button {
  min-width: 50%;
  margin-left: 0;
}
.authPart button:hover .icon {
  width: 1em;
}
.icon {
  margin-left: 10px;
  transition: all 0.3s ease-in-out;
  width: 0;
}
.cover {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: var(--el-color-primary);
  transition: all 1s ease-in-out;
}
.coverMove {
  transform: translateX(100%);
}
</style>
