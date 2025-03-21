<template>
    <div class="card">
        <slot name="header">No text</slot>
        <slot name="default">No text</slot>
        <div v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
  </template>

<script>
export default {
  mounted () {

  }
}
</script>

  <style scoped lang="scss">

  </style>
