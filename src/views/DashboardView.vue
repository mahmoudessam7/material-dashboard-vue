<script setup>
import ChartRow from '@/components/DashboardView/ChartRow.vue'
import StatisticRow from '@/components/DashboardView/StatisticRow.vue'
import Table from '@/components/DashboardView/Table.vue'
import Timeline from '@/components/DashboardView/Timeline.vue'
import TopNav from '@/components/TopNav.vue'
import Footer from '@/components/Footer.vue'

// document.write(new Date().getFullYear())
</script>
<template>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <!-- Navbar -->

    <div class="container">
      <TopNav name="Dashboard"></TopNav>
      <StatisticRow></StatisticRow>

      <!-- <div class="bg-white rounded-4 col shadow">
          <span class="material-symbols-outlined"> weekend </span>
        </div>
        <div class="bg-white rounded-4 col shadow">
          <span class="material-symbols-outlined"> weekend </span>
        </div>
        <div class="bg-white rounded-4 col shadow">
          <span class="material-symbols-outlined"> weekend </span>
        </div> -->
      <ChartRow></ChartRow>
      <div class="row row-cols-3 mt-4">
        <div class="col col-md-6 col-lg-8">
          <div class="card border-0 shadow h-100">
            <div class="card-header border-0 p-4 bg-white">
              <div class="row row-cols-2">
                <div class="col-8">
                  <h6>Projects</h6>
                  <p class="align-items-center d-flex gap-1 mb-0 opacity-75">
                    <span class="material-symbols-outlined fw-bold text-primary"> done </span
                    ><span class="fw-bold">30 done</span> this month
                  </p>
                </div>
                <div class="align-items-center col-4 d-flex justify-content-end">
                  <div class="dropdown pe-4">
                    <a
                      class="cursor-pointer"
                      id="dropdownTable"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      role="button"
                    >
                      <span class="material-symbols-outlined fw-bold text-dark user-select-none">
                        more_vert
                      </span>
                      <!-- <i class="fa fa-ellipsis-v text-secondary" aria-hidden="true"></i> -->
                    </a>
                    <ul
                      style="transition: all 0.2s ease 0s"
                      class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5 border-0 shadow"
                      aria-labelledby="dropdownTable"
                    >
                      <li>
                        <a class="dropdown-item border-radius-md" href="javascript:;">Action</a>
                      </li>
                      <li>
                        <a class="dropdown-item border-radius-md" href="javascript:;"
                          >Another action</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item border-radius-md" href="javascript:;"
                          >Something else here</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <Table></Table>
            </div>
          </div>
        </div>
        <div class="col col-md-6 col-lg-4">
          <div class="card border-0 shadow h-100">
            <div class="card-header p-4 bg-white border-0">
              <div class="row">
                <h6>Orders overview</h6>
                <div class="d-flex align-items-center text-secondary gap-2">
                  <span class="fs-5 fw-bold material-symbols-outlined text-success">
                    arrow_upward </span
                  ><span class="">24% this month</span>
                </div>
              </div>
            </div>
            <div class="card-body px-2 py-0">
              <Timeline></Timeline>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import '../public/assets/variables.scss';
@import '../node_modules/bootstrap/scss/bootstrap';

body {
  background-color: #eee;
}

.mt-70 {
  margin-top: 70px;
}

.mb-70 {
  margin-bottom: 70px;
}

.card {
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03),
    0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05),
    0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
  border-width: 0;
  transition: all 0.2s;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(26, 54, 126, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}
.vertical-timeline {
  width: 100%;
  position: relative;
  padding: 1.5rem 0 1rem;
}

.vertical-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 67px;
  height: 100%;
  width: 4px;
  background: #e9ecef;
  border-radius: 0.25rem;
}

.vertical-timeline-element {
  position: relative;
  margin: 0 0 1rem;
}

.vertical-timeline--animate .vertical-timeline-element-icon.bounce-in {
  visibility: visible;
  animation: cd-bounce-1 0.8s;
}
.vertical-timeline-element-icon {
  position: absolute;
  top: 0;
  left: 60px;
}

.vertical-timeline-element-icon .badge-dot-xl {
  box-shadow: 0 0 0 5px #fff;
}

.badge-dot-xl {
  width: 18px;
  height: 18px;
  position: relative;
}
.badge:empty {
  display: none;
}

.badge-dot-xl::before {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 0.25rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -5px 0 0 -5px;
  background: #fff;
}

.vertical-timeline-element-content {
  position: relative;
  margin-left: 90px;
  font-size: 0.8rem;
}

.vertical-timeline-element-content .timeline-title {
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 0 0 0.5rem;
  padding: 2px 0 0;
  font-weight: bold;
}

.vertical-timeline-element-content .vertical-timeline-element-date {
  display: block;
  position: absolute;
  left: -90px;
  top: 0;
  padding-right: 10px;
  text-align: right;
  color: #adb5bd;
  font-size: 0.7619rem;
  white-space: nowrap;
}

.vertical-timeline-element-content:after {
  content: '';
  display: table;
  clear: both;
}

// .dropdown-menu {
//   opacity: 0;
// }
// .dropdown-menu.show {
//   opacity: 1;
//   transition: opacity 0.2s;
//   display: block;
// }
main {
  width: 75rem;
}

.avatar-group a:not(:first-child) {
  margin-left: -8px;
}
.avatar-group .avatar {
  border: 2px solid #fff;
  position: relative;
}
.avatar {
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: 50rem;
  height: 48px;
  width: 48px;
  transition: all 0.2s ease-in-out;
}

.avatar img {
  width: 100%;
  border-radius: 50%;
}
.avatar-xs {
  height: 24px;
  width: 24px;
}
.avatar-sm {
  height: 36px;
  width: 36px;
}

.text-xs {
  font-size: 0.75rem;
}
.text-xxs {
  font-size: 0.65rem;
}
.icon {
  height: 4rem;
  width: 4rem;
}
</style>
