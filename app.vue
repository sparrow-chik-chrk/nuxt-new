<script lang="ts" setup>
useHead({
  script: [
    {
      type: "module",
      src: "https://wc.ticketcrm.com/lib/tbx-widget.min.js",
      async: true
    }
  ]
})
const {finalizePendingLocaleChange, waitForPendingLocaleChange} = useI18n()
// const website = useWebsiteStore()
//
// await callOnce(website.fetch)
const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}
</script>

<template>
  <NuxtLoadingIndicator/>
  <NuxtRouteAnnouncer/>
  <NuxtLayout>
    <NuxtPage :transition="{
        name: 'page',
        mode: 'out-in',
        onBeforeEnter
      }"/>
  </NuxtLayout>
</template>

<style lang="scss">


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