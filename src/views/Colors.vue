<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Brand Colors</div>
      <q-separator class="q-my-md" />
      <div class="q-gutter-sm">
        <div class="q-pa-xs rounded-borders bg-primary text-yellow">primary</div>
        <div class="q-pa-xs rounded-borders bg-secondary text-white">secondary</div>
        <div class="q-pa-xs rounded-borders bg-accent text-white">accent</div>
        <div class="q-pa-xs rounded-borders bg-dark text-white">dark</div>
        <div class="q-pa-xs rounded-borders bg-positive text-white">positive</div>
        <div class="q-pa-xs rounded-borders bg-negative text-white">negative</div>
        <div class="q-pa-xs rounded-borders bg-info text-white">info</div>
        <div class="q-pa-xs rounded-borders bg-warning text-white">warning</div>
        <div class="q-pa-xs rounded-borders bg-orange-4">orange-4</div>
        <div class="q-pa-xs rounded-borders bg-light-green-6">light-green-6</div>
        <div class="q-pa-xs rounded-borders bg-blue-grey-1">blue-grey-1</div>
        <div class="q-pa-xs rounded-borders bg-error">error</div>
        <p>Variables</p>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Components</div>
      <q-separator class="q-my-md" />
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="white" text-color="black" label="Standard" />
        <q-btn color="primary" label="Primary" />
        <q-btn color="secondary" label="Secondary" />
        <q-btn color="amber" glossy label="Amber" />
        <q-btn color="brown-5" label="Brown 5" />
        <q-btn color="deep-orange" glossy label="Deep Orange" />
        <q-btn color="purple" label="Purple" />
        <q-btn color="black" label="Black" />
        <q-btn color="error" label="Error" />
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  p {
    color: $red;
    background-color: $grey-5;
  }
  .text-error {
    color: $red;
  }
  .bg-error {
    background: $red;
  }
</style>
