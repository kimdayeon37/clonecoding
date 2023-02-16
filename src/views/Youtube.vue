<template>
  <q-page padding>
    <section class="content">
      <div class="row q-col-gutter-x-md q-col-gutter-y-xl">
        <YoutubeBoxComp v-for="i in 15" :key="i" :title="`유튜브 타이틀 ${i}`" :channel="`채널 이름 : ${i}`" />
      </div>
    </section>

    <q-page-sticky expand position="top">
      <q-toolbar class="bg-white toolbar">
        <q-space />
        <q-btn v-for="title in filters" :key="title" outline rounded class="q-mx-xs" color="primary" size="12px" :label="title" />
        <q-space />
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">
  import { defineAsyncComponent, ref } from 'vue'

  const YoutubeBoxComp = defineAsyncComponent(() => import('../components/YoutubeBox.vue'))

  const filters = ref(['전체', '실시간', '게임', '음악', '요리'])
</script>

<style lang="scss" scoped>
  .content {
    margin-top: 50px;
  }
  .toolbar {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
</style>
