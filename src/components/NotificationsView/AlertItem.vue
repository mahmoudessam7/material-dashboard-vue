<script setup>
let props = defineProps({
  type: String
})
</script>

<template>
  <div class="alert alert-dismissible show" :class="`alert-${props.type}`" role="alert">
    A simple {{ props.type }} alert with an
    <a href="javascript:;" class="alert-link fw-semibold">example link</a>. Give it a click if you
    like.
    <button
      type="button"
      class="btn-close text-xs"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>
<style lang="scss" scoped>
.alert {
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
