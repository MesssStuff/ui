<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let el of this.$el.children) {
      if (el.tagName.toLowerCase() !== 'button') {
        console.warn('mug-button-group should only includes mug-button')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button-group {
  display: inline-flex;
  vertical-align: middle;

  > .mug-button {
    border-radius: 0;
    border-right: 1.4px solid rgba(255, 255, 255, 0.7);

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
      border-right: none;
    }
  }
}
</style>
