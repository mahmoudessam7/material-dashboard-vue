<script setup>
let props = defineProps({
  logo: String,
  cardNumber: String
})
</script>
<template>
  <div class="card p-4 flex-row align-items-center">
    <img
      :src="`public/assets/img/logos/${props.logo}.png`"
      alt="Mastercard Logo"
      class="w-10 me-3"
    />
    <h6 class="mb-0">**** **** **** {{ props.cardNumber }}</h6>
    <a href="javascript:;" class="material-symbols-outlined text-dark ms-auto fs-5"> edit </a>
  </div>
</template>
