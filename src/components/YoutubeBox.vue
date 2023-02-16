<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <article>
      <q-img :ratio="16 / 9" src="https://cdn.quasar.dev/img/mountains.jpg" />
      <div class="row q-col-gutter-x-sm q-mt-md">
        <div class="col-auto">
          <q-avatar size="md">
            <q-img src="/src/assets/main.jpg" />
          </q-avatar>
        </div>
        <div class="col">
          <div class="text-subtitle1 text-weight-bold" :style="{ lineHeight: '1.1em' }">{{ title }}</div>
          <div class="text-caption text-grey-9 q-mt-xs">{{ channel }}</div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
  interface IProps {
    title: string
    channel: string
  }

  defineProps<IProps>()
</script>
