<script lang="ts" setup>
const name = ref(0)
const value = computed(() => {
  return name.value + 1
})
</script>

<template>
  <el-button type="primary" @click="name += 1">
    click
  </el-button>
  {{ value }}
  <Share style="color: red; width: 40px" />
  <Cherry style="width: 40px;" />
</template>

