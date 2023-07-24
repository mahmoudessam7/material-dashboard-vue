<script setup>
defineProps({
  tone: String
})
</script>
<template>
  <hr class="hr horizontal mt-2 mb-2" :class="{ dark: tone === 'dark', light: tone === 'light' }" />
</template>
<style scoped lang="scss">
@import '@/../public/assets/variables.scss';
.hr {
  border-top: none;
}

hr.horizontal {
  background-color: transparent;
  height: 1px;
}

hr.horizontal.light {
  background-image: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff, hsla(0, 0%, 100%, 0));
}

hr.horizontal.dark {
  background-image: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0),
    rgba(0, 0, 0, 0.6),
    hsla(0, 0%, 100%, 0)
  );
}
</style>
