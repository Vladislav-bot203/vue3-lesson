<template>
    <div>
        <h1>{{ text }}</h1>
    </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
    div {
        width: 100%;
    }
    h1 {
      word-wrap: break-word;
    }
</style>
