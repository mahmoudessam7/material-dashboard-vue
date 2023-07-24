<script setup>
let props = defineProps({
  date: String,
  code: String,
  price: String
})
</script>
<template>
  <li class="list-group-item p-0 d-flex justify-content-between border-0">
    <div>
      <h6 class="mb-0">{{ props.date }}</h6>
      <span class="text-xs">{{ props.code }}</span>
    </div>
    <div class="align-items-center d-flex gap-2 text-muted">
      {{ props.price }}
      <button
        href="javascript:;"
        class="align-items-center bg-transparent border-0 d-flex gap-1 opacity-75"
      >
        <span class="material-symbols-outlined fs-5"> picture_as_pdf </span>PDF
      </button>
    </div>
  </li>
</template>
<style scoped lang="scss">
li:not(:last-child) {
  margin-bottom: 1.4rem;
}
</style>
