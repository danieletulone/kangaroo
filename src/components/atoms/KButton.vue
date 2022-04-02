<script lang="ts" setup></script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style>
button {
  background-color: #5f5f5f;
  border-radius: 5px;
  border: 1px solid #fff;
  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.1);
  color: #fff;
  cursor: pointer;
  font-family: Nunito, sans-serif;
  letter-spacing: 1px;
  padding: 5px 15px;
  text-transform: uppercase;
  transition: 0.5s;
}

button:hover {
  background: #383838;
  box-shadow: 0 8px 5px -5px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}
</style>
