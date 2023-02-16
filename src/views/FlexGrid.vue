<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Flexbox - Gutter</div>
      <q-separator class="q-my-md" />
      <div class="bg-yellow">
        <div class="q-gutter-x-md">
          <div v-for="n in 4" :key="n" class="square"></div>
        </div>
        <div class="q-gutter-y-md">
          <div v-for="n in 4" :key="n" class="bg-primary">{{ n }}</div>
        </div>
      </div>
      <q-separator spaced />
      <div class="bg-yellow">
        <div class="row q-col-gutter-md">
          <div v-for="n in 8" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-subtitle2 text-center">Title</div>
              </q-img>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4">Flexbox - Col</div>
      <q-separator class="q-my-md" />
      <div class="row">
        <div class="border col-2">col-2</div>
        <div class="border col-8">col-8</div>
        <div class="border col-2">col-2</div>
        <div class="border col-2">col-2</div>
      </div>
      <q-separator spaced />
      <div class="row">
        <div class="border col">col</div>
        <div class="border col">col</div>
        <div class="border col">col</div>
        <div class="border col">col</div>
      </div>
      <q-separator spaced />
      <div class="row">
        <div class="border col-auto">col</div>
        <div class="border col">col</div>
        <div class="border col">col</div>
        <div class="border col">col</div>
      </div>
      <q-separator spaced />
      <div class="row">
        <div class="border col-grow">col</div>
        <div class="border col-1">col</div>
        <div class="border col-1">col</div>
        <div class="border col-1">col</div>
      </div>
      <q-separator spaced />
      <div class="row no-wrap">
        <div class="border col-auto">col-auto col-auto col-auto col-auto</div>
        <div class="border col-shrink">col-shrink col-shrink col-shrink col-shrink</div>
        <div class="border col-1">col</div>
        <div class="border col-1">col</div>
        <div class="border col-1">col</div>
        <div class="border col-1">col</div>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Toolbar</div>
      <q-separator class="q-my-md" />
      <div class="row items-center justify-between bg-primary q-px-sm" :style="{ minHeight: '50px' }">
        <div class="row items-center">
          <q-btn icon="menu" flat dense round color="white" />
          <span class="text-h6 text-weight-bold text-white">Quasar App</span>
        </div>
        <q-btn icon="light_mode" flat dense round color="white" />
      </div>
      <q-separator spaced />
      <div class="row items-center justify-between bg-primary q-px-sm" :style="{ minHeight: '50px' }">
        <q-btn icon="menu" flat dense round color="white" />
        <span class="text-h6 text-weight-bold text-white">Quasar App</span>
        <q-btn icon="light_mode" flat dense round color="white" />
      </div>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4">Flexbox - Row</div>
      <q-separator class="q-my-md" />
      <div class="row inline bg-yellow">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
      <q-separator spaced />
      <div class="row inline reverse bg-yellow">
        <div v-for="n in 6" :key="n" class="square">{{ n }}</div>
      </div>
      <q-separator spaced />
      <div class="row inline bg-yellow no-wrap">
        <div v-for="n in 16" :key="n" class="square">{{ n }}</div>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Flexbox - Column</div>
      <q-separator class="q-my-md" />
      <div class="column inline bg-yellow">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .square {
    height: 80px;
    width: 80px;
    background-color: $primary;
    border: 1px solid black;
    display: inline-block;
    font-weight: 900;
    color: #fff;
  }
  .border {
    border: 1px solid $primary;
    padding: 8px;
  }
</style>
