<template>
  <input class="outline-input" type="text">
</template>

<script>
export default {
  name: "OutlineTextInput"
}
</script>

<style scoped>
.outline-input{
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
.outline-input:focus{
  color: var(--secondary-asset-color);
  border-color: var(--secondary-asset-color);
  background-color: var(--primary-text-color);
  cursor: pointer;
  outline: none;
}
</style>