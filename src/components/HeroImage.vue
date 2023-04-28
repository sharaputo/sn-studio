<template>
  <div class="image" ref="imageRef"></div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import hoverEffect from 'hover-effect';

  interface Props {
    src: string;
  }

  const props = defineProps<Props>();

  const background = '/assets/images/portfolio/background.png';
  const imageRef = ref<HTMLDivElement>();
  const imageHeight = ref<number>();
  const setImageHeight = (el: HTMLDivElement) => {
    el.style.setProperty('--image-height', `${el.offsetWidth}px`);
  };

  onMounted(() => {
    if (!imageRef.value) return;

    setImageHeight(imageRef.value);

    new hoverEffect({
      parent: imageRef.value,
      intensity: 3,
      image1: props.src,
      image2: props.src,
      displacementImage: background,
    });
  });
</script>

<style lang="less" scoped>
  .image {
    height: var(--image-height);
  }
</style>
