<script setup>
import GenericTableHead from '@/components/GenericTableHead.vue'
import AuthorsTableBody from '@/components/TablesView/AuthorsTableBody.vue'
</script>
<template>
  <table class="table table-borderless align-middle mb-1">
    <GenericTableHead
      col1="Author"
      col2="Function"
      col3="Status"
      col4="Employed"
    ></GenericTableHead>
    <AuthorsTableBody></AuthorsTableBody>
  </table>
</template>
