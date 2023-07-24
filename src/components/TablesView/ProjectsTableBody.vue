<script>
import ProjectsTableRow from '@/components/TablesView/ProjectsTableRow.vue'
import axios from 'axios'

export default {
  data() {
    return {
      projects: []
    }
  },
  components: { ProjectsTableRow },

  mounted() {
    let app = this
    axios.get('http://localhost:3001/projects').then(function (res) {
      app.projects = res.data
    })
  }
}
</script>
<template>
  <ProjectsTableRow
    v-for="project in projects"
    :key="project.name"
    :photo="project.photo"
    :name="project.name"
    :budget="project.budget"
    :status="project.status"
    :completion="project.completion"
  ></ProjectsTableRow>
</template>
