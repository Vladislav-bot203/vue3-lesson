<template>
    <div class="appWrapper">
      <div class="card">
        <h2>Slots</h2>
      </div>

      <app-list>
        <template #default="{iter, id}">
          <span style="color: orange">Item: {{ iter }}, id: <strong>{{ id + 1 }}</strong></span>
        </template>
      </app-list>

      <app-block>
          <p>This is the most important text for the new block</p>
        <template #:header>
          <h3>This is header</h3>
        </template>
        <template #:footer>
          <hr />
          <small>This is footer</small>
        </template>
      </app-block>
    </div>
  </template>

<script>
import AppBlock from './components/AppBlock.vue'
import AppList from './components/AppList.vue'

export default {
  components: {
    'app-block': AppBlock,
    'app-list': AppList
  }
}
</script>

  <style scoped lang="scss">
      .appWrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      background-color: rgb(38, 38, 73);
      padding: 20px;
    }

    .card {
      width: 600px;
      border-radius: 15px;
      background-color: azure;
      padding: 15px;
    }
  </style>
