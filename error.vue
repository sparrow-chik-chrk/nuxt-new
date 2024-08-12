<script lang="ts" setup>
import {useError} from "#app"

const error = useError()
const {finalizePendingLocaleChange} = useI18n()
const website = useWebsiteStore()
const {locale} = useI18n()
await callOnce(website.fetch)
const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}

</script>

<template>
  <NuxtLoadingIndicator/>
  <NuxtRouteAnnouncer/>
  <NuxtLayout>
    <div class="flex-col page">
      <p class="avanti number-large color-grey-background">{{ error.statusCode }}</p>
      <h1 v-if="error.statusCode === 404" class="avanti color-bordo">{{ $t("404-title") }}</h1>
      <h1 v-else class="avanti color-bordo">{{ $t("error-occurred") }}</h1>
      <p v-if="error.statusCode === 404" class="azbuka body-reg color-black">{{ $t("404-message") }} </p>
      <NuxtLinkLocale class="a-s-cen btn-wrap" to="/">
        <PrimeButton class="padding-none border-none home-btn">
          <span class="azbuka btn text-upper btn-label color-white">{{ $t("back-home") }}</span>
          <Icon class="hidden btn-arrow" mode="svg" name="my-icon:arrow"/>
        </PrimeButton>
      </NuxtLinkLocale>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.page {
  margin: 1.9rem 0 3rem;
  @media(min-width: 768px) {
    margin: 7rem 0 4rem;
  }
  @media(min-width: 1440px) {
    margin: 8rem 0;
  }

  h1 {
    margin-bottom: 0.8rem;
    @media(min-width: 768px) {
      margin-bottom: 1.7rem;
    }
    @media(min-width: 1440px) {
      margin-bottom: 0.9rem;
    }
  }
}

.btn-wrap {
  line-height: 0;
  margin-top: 2rem;
  @media(min-width: 768px) {
    margin-top: 3rem;
  }
  @media(min-width: 1440px) {
    margin-top: 4rem;
  }

  :deep(.home-btn) {
    --p-button-border-radius: 0;
    --p-button-primary-active-background: #5a0000;
    --p-button-primary-background: #800000;
    --p-button-primary-hover-background: #6c0000;
    height: 4.8rem;
    transition: all 0.3s ease;
    width: 23.5rem;
    @media(min-width: 1440px) {
      height: 4.8rem;
      padding: 0;
      width: 24.6rem;

      .btn-arrow {
        display: block;
        height: 0.8rem;
        transition: all 0.3s ease;
        width: 1.3rem;

        path {
          fill: white;
        }
      }
    }

    .btn-label {
      transition: all 0.3s ease;
    }

    @media (hover: hover) {
      &:hover {
        border: none;

        .btn-label {
          color: white;
        }

        @media(min-width: 1440px) {
          .btn-arrow {
            width: 0;
          }
        }
      }
    }
  }
}
</style>