<script lang="ts" setup>

const {find} = useStrapi4()
const response: any = ref(null)
const error: any = ref(null)
const fetchOptions = {
  headers: {
    "Authorization": `Bearer ${useRuntimeConfig().public.jwt}`,
    "Content-Type": "application/json"
  }
}

const {data, status, refresh, error: any} = await useAsyncData(
    "shows",
    () => find("shows", undefined, fetchOptions)
)


</script>

<template>
  <div>
    <!--    <MainTitleBlock/>    -->
    <Title>Site</Title>
  </div>
</template>

<style scoped>

</style>