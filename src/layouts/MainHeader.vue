<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleDrawer" />

      <q-toolbar-title>
        <q-avatar>
          <q-img src="/src/assets/main.jpg" />
        </q-avatar>
        테스트
      </q-toolbar-title>

      <q-space />
      <q-btn dense flat round icon="invert_colors" @click="toggleDark" />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
  import { useQuasar } from 'quasar'

  interface IProps {
    drawer: boolean
  }

  const $props = withDefaults(defineProps<IProps>(), {
    drawer: false,
  })

  const $emit = defineEmits<{
    (e: 'update:drawer', v: boolean): void
  }>()

  const $q = useQuasar()

  const toggleDrawer = () => $emit('update:drawer', !$props.drawer)

  const toggleDark = () => $q.dark.toggle()
</script>
