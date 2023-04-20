<template>
  <div class="app">
    <NuxtLayout name="header"></NuxtLayout>
    <NuxtPage style="min-height: 100vh"></NuxtPage>
    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
