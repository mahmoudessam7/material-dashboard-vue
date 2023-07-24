<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Hr from './components/Hr.vue'
</script>

<template>
  <header class="bg-dark bg-gradient">
    <a
      class="navbar-brand m-0"
      href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
      target="_blank"
    >
      <img src="/assets/img/logo-ct.png" class="navbar-brand-img" alt="main_logo" />
      <span class="ms-1 font-weight-bold text-white">Vue Dashboard</span>
    </a>
    <!-- <hr class="horizontal light mt-2 mb-2" /> -->
    <Hr tone="light"></Hr>
    <div class="wrapper mt-2">
      <nav>
        <!-- <RouterLink to="/"> Home</RouterLink> -->
        <RouterLink to="/dashboard"
          ><span class="material-symbols-outlined"> dashboard </span>Dashboard</RouterLink
        >
        <RouterLink to="/tables"
          ><span class="material-symbols-outlined"> table_view </span>Tables</RouterLink
        >
        <RouterLink to="/billing"
          ><span class="material-symbols-outlined"> receipt_long </span>Billing</RouterLink
        >
        <RouterLink to="/notifications"
          ><span class="material-symbols-outlined"> notifications </span>Notifications</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
@import '../public/assets/variables.scss';

// #app {
//   display: grid;
//   gap: 5rem;
//   grid-template-columns: 15rem 1fr;
// }

header {
  // background: $nav-bg-light;
  line-height: 1.5;
  max-height: 100vh;
  padding: 0;
  // margin: 1rem 0;
  border-radius: 12px;

  // position: fixed;
}

hr {
  border-top: none;
}

hr.horizontal {
  background-color: transparent;
  height: 1px;
}

hr.horizontal.light {
  background-image: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff, hsla(0, 0%, 100%, 0));
}

.navbar-brand {
  display: flex;
  gap: 0.5rem;
  padding: 1.2rem 1.5rem;
  // border-bottom: 1px solid #545454;
  // border-radius: 5px;
}

.navbar-brand-img {
  height: 1.5rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  // margin-top: 2rem;
  display: flex;
  flex-direction: column;
  // padding: 1rem;
}

nav a.router-link-exact-active {
  // color: var(--color-text);
  background-image: linear-gradient(195deg, #ec407a, #d81b60);
}

nav a.router-link-exact-active:hover {
  background-color: hsla(0, 0%, 78%, 0.2);
}

.material-symbols-outlined {
  font-size: 1.2rem;
}

nav a {
  display: flex;
  align-items: center;
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;

  span {
    margin-right: 0.5rem;
  }
  &:not(:last-child) {
    margin-bottom: 0.25rem;
  }
  &:hover {
    background-color: hsla(0, 0%, 78%, 0.2);
  }
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    // display: flex;
    place-items: center;
    // padding-right: calc(var(--section-gap) / 2);
    padding: 1rem;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    // margin-left: -1rem;
    font-size: 1rem;

    padding: 0.2rem 0;
    // margin-top: 1rem;
  }
}
</style>
