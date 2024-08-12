<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout>
    <!--    <NuxtPage/>-->
  </NuxtLayout>
</template>
<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  filter: blur(1rem);
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: blur(1rem);
  opacity: 0;
}
</style>