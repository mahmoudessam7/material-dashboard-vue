<script setup>
import GenericTableHead from '@/components/GenericTableHead.vue'
import ProjectsTableBody from '@/components/TablesView/ProjectsTableBody.vue'
</script>
<template>
  <table class="table table-borderless align-middle mb-1">
    <GenericTableHead
      col1="Project"
      col2="Budget"
      col3="Status"
      col4="Completion"
    ></GenericTableHead>
    <ProjectsTableBody></ProjectsTableBody>
  </table>
</template>
