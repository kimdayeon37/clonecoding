<template>
  <q-layout view="hHh LpR fff">
    <MainHeaderComp v-if="$route.name !== 'youtube'" :drawer="leftDrawerOpen" @update:drawer="setLeftDrawerOpen" />
    <YoutubeHeaderComp v-if="$route.name === 'youtube'" :drawer="leftDrawerOpen" @update:drawer="setLeftDrawerOpen" />

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list bordered separator>
        <q-item clickable v-ripple v-for="(item, idx) in leftMenuItem" :key="idx" :to="item.url">
          <q-item-section>{{ item.text }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { defineAsyncComponent, ref } from 'vue'

  const leftDrawerOpen = ref(false)
  const setLeftDrawerOpen = (v: boolean) => (leftDrawerOpen.value = v)

  const MainHeaderComp = defineAsyncComponent(() => import('./MainHeader.vue'))
  const YoutubeHeaderComp = defineAsyncComponent(() => import('./YoutubeHeader.vue'))

  const leftMenuItem = ref<{ url: string; text: string }[]>([
    { url: '/', text: 'home' },
    { url: '/typography', text: 'typography' },
    { url: '/colors', text: 'colors' },
    { url: '/spacing', text: 'spacing' },
    { url: '/breakpoints', text: 'breakpoints' },
    { url: '/classes-variables', text: 'classes-variables' },
    { url: '/flex-grid', text: 'flex-grid' },
    { url: '/instagram', text: 'instagram' },
    { url: '/youtube', text: 'youtube' },
  ])
</script>
