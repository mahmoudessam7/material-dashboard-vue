<script setup>
import TopNav from '@/components/TopNav.vue'
import AuthorsTable from '@/components/TablesView/AuthorsTable.vue'
import ProjectsTable from '@/components/TablesView/ProjectsTable.vue'
import Footer from '@/components/Footer.vue'

import TableCard from '@/components/TableCard.vue'
</script>
<template>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <div class="container"><TopNav name="Tables"></TopNav></div>
    <div class="row mb-5">
      <div class="col">
        <TableCard title="Authors">
          <template #table>
            <AuthorsTable></AuthorsTable>
          </template>
        </TableCard>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <TableCard title="Projects"
          ><template #table><ProjectsTable></ProjectsTable></template
        ></TableCard>
      </div>
    </div>
    <Footer></Footer>
  </main>
</template>

<style lang="scss" scoped>
@import '../public/assets/main.scss';
// @media (min-width: 1024px) {
//   .about {
//     min-height: 100vh;
//     display: flex;
//     align-items: center;
//     width: 100%;
//   }
// }
main {
  width: 75rem;
}
</style>
