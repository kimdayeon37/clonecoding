<template>
  <q-page class="q-pa-lg">
    <div class="row justify-center q-gutter-md q-pb-md">
      <div class="col-auto">
        <q-avatar size="150px">
          <q-img src="/src/assets/main.jpg" />
        </q-avatar>
      </div>
      <div class="col-auto column justify-between">
        <div class="row items-center q-gutter-md">
          <div class="text-h6">hm_son7</div>
          <q-space />
          <q-btn label="팔로우" />
          <q-btn label="메시지 보내기" />
        </div>
        <div class="row items-center justify-between">
          <div>게시물 189</div>
          <div>팔로워 1143만</div>
          <div>팔로우 209</div>
        </div>
        <div class="column">
          <div>Son HeungMin(손흥민)🇰🇷</div>
          <div>@spursofficial ⚽️🇰🇷🇬🇧 @adidasfootball</div>
          <div>www.facebook.com/HeungMinSonOfficial</div>
        </div>
      </div>
    </div>

    <q-separator class="full-width" />

    <div class="row">
      <q-tabs v-model="tab" dense switch-indicator :inline-label="$q.screen.gt.sm" class="full-width">
        <q-tab name="document" label="게시물" icon="grid_on" />
        <q-tab name="reels" label="릴스" icon="slideshow" />
      </q-tabs>
    </div>

    <q-tab-panels v-model="tab">
      <q-tab-panel name="document">
        <div class="row" :class="`q-col-gutter-${$q.screen.name}`">
          <div class="col-4" v-for="i in 6" :key="i">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" @mouseover="mouseoverEvent(i)" @mouseout="mouseoutEvent">
              <div :class="{ hidden: mouseoverItem !== i }" class="absolute-full text-subtitle2 flex flex-center">하트? 댓글?</div>
            </q-img>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="reels"> </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const tab = ref<string>('document')

  const mouseoverItem = ref<number>()

  const mouseoverEvent = (i: number) => (mouseoverItem.value = i)

  const mouseoutEvent = () => (mouseoverItem.value = undefined)
</script>

<style scoped lang="scss"></style>
