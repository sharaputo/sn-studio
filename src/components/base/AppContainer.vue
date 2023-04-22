<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="less" scoped>
  .container {
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;

    @media @small-min {
      max-width: 480px;
      padding: 0;
    }
    @media @medium-min {
      max-width: 600px;
    }
    @media @xlarge-min {
      max-width: 100%;
      padding: 0 38px;
    }
    @media @largest-min {
      padding: 0 60px;
    }
  }
</style>
