<script setup>
import { ref } from 'vue'

let isHovering = ref(false)

let props = defineProps({
  name: String
})
</script>
<template>
  <nav class="d-flex gap-3 align-items-center mb-5 px-3">
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><a href="#" class="text-decoration-none">Pages</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ props.name }}</li>
        </ol>
        <h6 class="fw-semibold">{{ props.name }}</h6>
      </nav>
    </div>
    <div class="ms-auto">
      <input
        type="email"
        class="form-control nav-input"
        id="exampleFormControlInput1"
        placeholder="Type here..."
      />
    </div>
    <ul class="align-items-center d-flex gap-3 mb-0 ps-0 list-unstyled">
      <a href="#" class="btn-primary text-decoration-none">Online Builder</a>
      <a
        href="#"
        @mouseover="isHovering = true"
        @mouseout="isHovering = false"
        :class="{
          'align-items-center border border-1 border-dark-subtle btn d-flex gap-1 fs-6': true,
          'bg-body-secondary': isHovering
        }"
      >
        <span class="material-symbols-outlined fs-5"> star </span>Star</a
      >
      <a href="#"
        ><span class="material-symbols-outlined fs-5 lh-sm material-symbols-outlined color-gray">
          settings
        </span></a
      >
      <a href="#"
        ><span class="material-symbols-outlined fs-5 lh-sm material-symbols-outlined color-gray">
          notifications
        </span></a
      >
      <li>
        <a href="#" class="align-items-center d-flex gap-1 text-decoration-none"
          ><span class="material-symbols-outlined fs-4 lh-sm material-symbols-outlined color-gray">
            person
          </span>
          <span>Log In</span></a
        >
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
@import '../public/assets/main.scss';
@import '../public/assets/variables.scss';

.color-gray {
  color: $gray-600;
}

.nav-input {
  width: 12rem;
  background-color: #f0f2f5;
  border: 1px solid #d2d2d2;
  box-shadow: none;
  outline: none;

  &:focus {
    box-shadow: inset 0 0 0 1.2px $color-primary-light;
    background-color: transparent;
    border: 1px solid transparent;
  }
}
li a {
  &:link,
  &:visited {
    color: #8f8f8f;
  }
}
</style>
