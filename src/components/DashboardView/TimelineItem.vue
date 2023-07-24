<script setup>
let props = defineProps({
  icon: String,
  color: String,
  heading: String,
  date: String
})
</script>
<template>
  <li class="d-flex ps-4">
    <span
      class="material-symbols-outlined timeline-icon bg-white"
      :class="{
        'text-success': props.color === 'green',
        'text-danger': props.color === 'red',
        'text-warning': props.color === 'yellow',
        'text-primary': props.color === 'blue',
        'text-dark': props.color === 'dark'
      }"
    >
      {{ props.icon }}
    </span>
    <span>
      <div class="heading fw-semibold">{{ props.heading }}</div>
      <p class="text-xs">{{ props.date }}</p>
    </span>
  </li>
</template>
<style scoped lang="scss">
@import '../public/assets/main.scss';

li {
  border-left: 1px solid #e6e6e6;
  position: relative;
  margin-left: 10px;
  &:last-child {
    border: 0px;
    padding-bottom: 0;
  }
  // &:before {
  //   // content: '';
  //   width: 15px;
  //   height: 15px;
  //   background: white;
  //   border: 1px solid #4e5ed3;
  //   // box-shadow: 3px 3px 0px #bab5f8;
  //   // box-shadow: 3px 3px 0px #bab5f8;
  //   border-radius: 50%;
  //   position: absolute;
  //   left: -10px;
  //   top: 0px;
  // }
}

.timeline-icon {
  font-size: 1.2rem;
  position: absolute;
  left: -10px;
  top: 0px;
}
.heading {
  @include mobile-and-up {
    font-size: 0.9rem;
  }
  @include mobile-only {
    margin-bottom: 0.3rem;
    font-size: 0.85rem;
  }
}
</style>
