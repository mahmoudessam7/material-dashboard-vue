<script>
import axios from 'axios'

import AuthorsTableRow from '@/components/TablesView/AuthorsTableRow.vue'

// let team = []

export default {
  components: {
    AuthorsTableRow
  },

  data() {
    return {
      team: []
    }
  },
  created() {
    let app = this
    axios.get('http://localhost:3001/authors').then(function (res) {
      app.team = res.data
    })
    // setTimeout(() => {
    //   console.log(app.team)
    // }, 1000)
  }
}
</script>

<template>
  <tbody>
    <AuthorsTableRow
      v-for="member in team"
      :key="member.email"
      :name="member.name"
      :email="member.email"
      :position="member.position"
      :department="member.department"
      :online="member.online"
      :date="member.date"
      :photo="member.photo"
    ></AuthorsTableRow>
  </tbody>
</template>
