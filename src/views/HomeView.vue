<script lang="ts" setup>
const name = ref(0)
const value = computed(() => {
  return name.value + 1
})
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <el-button type="primary" @click="name += 1">
    type
  </el-button>
  {{ value }}
</template>
