<script setup>
import TableRow from '@/components/DashboardView/TableRow.vue'

let team1 = ['team-1', 'team-2', 'team-3', 'team-4']
let team2 = ['team-2', 'team-4']
let team3 = ['team-1', 'team-3']
let team4 = ['team-1', 'team-3', 'team-4', 'team-2']
let team5 = ['team-4']
let team6 = ['team-1', 'team-4']
</script>
<template>
  <tbody>
    <TableRow
      logo="logo-xd"
      heading="Material XD Version"
      budget="$14,000"
      percentage="60"
      :team="team1"
    ></TableRow>

    <TableRow
      logo="logo-atlassian"
      heading="Add Progress Track"
      budget="$3,000"
      percentage="10"
      :team="team2"
    ></TableRow>

    <TableRow
      logo="logo-slack"
      heading="Fix Platform Errors"
      budget="Not set"
      percentage="100"
      :team="team3"
    ></TableRow>

    <TableRow
      logo="logo-spotify"
      heading="Launch our Mobile App"
      budget="$20,500"
      percentage="100"
      :team="team4"
    ></TableRow>

    <TableRow
      logo="logo-jira"
      heading="Add the New Pricing Page"
      budget="$500"
      percentage="25"
      :team="team5"
    ></TableRow>

    <TableRow
      logo="logo-invision"
      heading="Redesign New Online Shop"
      budget="$2,000"
      percentage="40"
      :team="team6"
    ></TableRow>
  </tbody>
</template>

<style scoped lang="scss"></style>
