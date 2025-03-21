<template>
        <button class="button" :class="color" @click="$emit('action')">
            <slot></slot>
        </button>
</template>

<script>

export default {
  emits: ['action'],
  props: {
    color: {
      type: String,
      default: '',
      validator (value) {
        return ['readable', 'primary', 'danger', ''].includes(value)
      }
    }
  }

}
</script>

<style lang="scss" scoped>
    .button {
        border: 0;
        border-radius: 10px;
        padding: 8px;

        &:hover {
            cursor: pointer;
        }
    }

    .primary {
        border: 2px solid rgb(119, 175, 156);
        background-color: azure;
    }

    .readable {
        color: white;
        background-color: rgb(119, 175, 156);
        border: 0;
    }

    .danger {
        background-color: rgb(192, 101, 101);
        color: white;
        border: 0;
    }
</style>
