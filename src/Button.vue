<template>
  <button class="mug-button" :class="`icon-${iconPosition}`" @click="$emit('click')">
    <span class="text"><slot/></span>
    <mug-icon class="icon loading" v-if="loading" name="autorenew"></mug-icon>
    <mug-icon class="icon" v-if="icon && !loading" :name="icon"></mug-icon>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.mug-button {
  border: none;
  cursor: pointer;
  background-color: rgb(98, 0, 238);
  color: #fff;
  font-size: var(--font-size);
  padding: 8px 16px;
  border-radius: var(--border-radius);
  transition: all 0.2s;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;

  .text {
    letter-spacing: 1px;
  }

  .loading {
    animation: loading-ani 1.4s infinite linear;
  }

  @keyframes loading-ani {
    from{
      transform: rotate(0);
    }
    to{
      transform: rotate(360deg);
    }
  }

  &.icon-left {
    > .text {
      order: 1;
      margin-left: 0.4em;
    }
  }

  &.icon-right {
    > .icon {
      order: 2;
    }

    > .text {
      order: 1;
      margin-right: 0.4em;
    }
  }

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
