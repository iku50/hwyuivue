<template>
  <div class="col-md-3" style="text-align: center">
  <button
    :class="['my-button', { 'disabled': disabled, 'primary': primary }]"
    @click="handleClick"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '按钮占位'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style>
.my-button {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
  color: #333;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
}
.col-md-3 {
  position: relative;
  min-height: 1px;
  padding-top: 20%;
  padding-bottom: 20%;
  padding-right: 15px;
  padding-left: 15px;
}
</style>
