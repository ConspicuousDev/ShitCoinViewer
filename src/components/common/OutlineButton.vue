<template>
  <button class="outline-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "OutlineButton"
}
</script>

<style scoped>
.outline-button{
  padding: .6rem .5rem;
  background-color: inherit;
  color: var(--primary-text-color);
  font-size: 20px;
  font-family: "UI", sans-serif;
  font-weight: 400;
  border-radius: var(--default-radius);
  border: 2px var(--primary-asset-color) solid;
  transition: color var(--normal-delay), background-color var(--normal-delay), border-color var(--normal-delay);
}

.outline-button:hover{
  color: var(--secondary-asset-color);
  border-color: var(--secondary-asset-color);
  background-color: var(--primary-text-color);
  cursor: pointer;
}
</style>