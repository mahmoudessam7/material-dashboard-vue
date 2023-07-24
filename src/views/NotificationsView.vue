<script setup>
import TopNav from '@/components/TopNav.vue'
import AlertItem from '@/components/NotificationsView/AlertItem.vue'
import NotificationItem from '@/components/NotificationsView/NotificationItem.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <div class="container"><TopNav name="Notifications"></TopNav></div>
    <div class="row">
      <div class="col-8 mx-auto">
        <div class="card border-0 shadow">
          <div class="card-header border-0 bg-white pt-3">
            <h6 class="mb-0">Alerts</h6>
          </div>
          <div class="card-body">
            <AlertItem type="primary"></AlertItem>
            <AlertItem type="secondary"></AlertItem>
            <AlertItem type="success"></AlertItem>
            <AlertItem type="danger"></AlertItem>
            <AlertItem type="warning"></AlertItem>
            <AlertItem type="info"></AlertItem>
            <AlertItem type="light"></AlertItem>
            <AlertItem type="dark"></AlertItem>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-8 mx-auto">
        <div class="card border-0 shadow">
          <div class="card-header border-0 bg-white pt-3">
            <h6 class="mb-0">Notifications</h6>
            <span class="text-sm text-muted"
              >Notifications on this page use Vue3-toastify. Read more details
              <a
                href="https://vue3-toastify.js-bridge.com/"
                class="text-dark fw-semibold text-muted"
                >here</a
              >.
            </span>
          </div>
          <div class="card-body">
            <div class="row">
              <NotificationItem type="success"></NotificationItem>
              <NotificationItem type="info"></NotificationItem>
              <NotificationItem type="warning"></NotificationItem>
              <NotificationItem type="error"></NotificationItem>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
main {
  width: 75rem;
}
</style>
