<template>
    <div class="form-control" :class="{ invalid: error }">
        <label :for="id">{{ label }}</label>
        <input
          type="text"
          :placeholder="placeholder"
          :id="id"
          :value="modelValue"
          @input="onChange"
        >
        <small class="error" v-if="error">{{ error }}</small>
    </div>
</template>

<script>

export default {
  emits: ['update:modelValue'],
  props: {
    error: {
      type: String
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    modelValue: String
  },
  data () {
    return {
      id: 'input-' + Math.random()
    }
  },
  methods: {
    onChange (event) {
      this.$emit('update:modelValue', event.target.value.trim())
    }
  }
}
</script>

<style scoped lang="scss">
    .error {
      color: red;
      font-weight: bold;
    }

    .form-control.invalid input {
      border-color: red;
    }
</style>
