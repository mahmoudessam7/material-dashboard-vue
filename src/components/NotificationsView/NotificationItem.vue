<script setup>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

let props = defineProps({
  type: String
})

function showToast() {
  toast('Vue Dashboard', {
    type: props.type,
    autoClose: 5000,
    position: toast.POSITION.BOTTOM_RIGHT,
    hideProgressBar: true,
    dangerouslyHTMLString: true
    // progress: 1
  })
}
</script>

<template>
  <div class="col-3">
    <button
      type="button"
      class="btn bg-gradient w-100 py-2 text-uppercase fw-bold"
      :class="{
        'btn-success': props.type === 'success',
        'btn-primary': props.type === 'info',
        'btn-warning': props.type === 'warning',
        'btn-danger': props.type === 'error'
      }"
      @click="showToast"
    >
      {{ props.type }}
    </button>
  </div>
</template>
