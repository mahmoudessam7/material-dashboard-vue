<script setup>
let props = defineProps({
  status: String,
  company: String,
  date: String,
  price: String
})

let icon = ''

if (props.status === 'up') {
  icon = 'expand_less'
} else if (props.status === 'down') {
  icon = 'expand_more'
} else if (props.status === 'pending') {
  icon = 'priority_high'
}

let renderPrice = ''

if (props.status === 'up' || props.status === 'down') {
  // eslint-disable-next-line vue/no-setup-props-destructure
  renderPrice = props.price
} else if (props.status === 'pending') {
  renderPrice = 'Pending'
}

let negPos = ''
if (props.status === 'up') {
  negPos = '+ $'
} else if (props.status === 'down') {
  negPos = '- $'
} else if (props.status === 'pending') {
  negPos = ''
}
</script>
<template>
  <li class="list-group-item p-0 border-0 d-flex align-items-center justify-content-between pe-2">
    <div class="d-flex align-items-center gap-3">
      <button
        class="align-items-center btn btn-icon-only d-flex justify-content-center rounded-5"
        :class="{
          'border-danger text-danger': props.status === 'down',
          'border-success text-success': props.status === 'up',
          'border-dark text-dark': props.status === 'pending'
        }"
      >
        <span class="material-symbols-outlined fs-5"> {{ icon }} </span>
      </button>
      <div>
        <h6 class="mb-0">{{ props.company }}</h6>
        <span class="text-xs text-muted">{{ props.date }}</span>
      </div>
    </div>
    <div
      class="fw-semibold text-sm"
      :class="{ 'text-danger': props.status === 'down', 'text-success': props.status === 'up' }"
    >
      {{ negPos }} {{ renderPrice }}
    </div>
  </li>
</template>
<style scoped lang="scss">
li:not(:last-child) {
  margin-bottom: 1.2rem;
}
</style>
