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
  <div>test</div>
  <div class="fw-500 fs-40">
    <div class="fs-30">
      test
    </div>
  </div>
  <div class="test" />
</template>

<style lang="scss" scoped>
.test {
  @include card(100, 200);
}
</style>
