<script lang="ts" setup>

</script>

<template>
  <PrimeScrollPanel class="w-screen h-screen">
    <AppHeader/>
    <main class="flex-col h-auto bg-white">
      <slot/>
    </main>
    <AppFooter/>
  </PrimeScrollPanel>

</template>

<style lang="scss" scoped>
main {
  justify-content: flex-start;
}
</style>