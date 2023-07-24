<script setup>
import TimelineItem from '@/components/DashboardView/TimelineItem.vue'
</script>
<template>
  <div class="container">
    <div class="wrapper w-100">
      <ul class="sessions mt-2">
        <TimelineItem
          icon="notifications"
          color="green"
          heading="$2400, Design changes"
          date="22 DEC 7:20 PM"
        ></TimelineItem>
        <TimelineItem
          icon="code"
          color="red"
          heading="New order #1832412"
          date="21 DEC 11 PM"
        ></TimelineItem>
        <TimelineItem
          icon="shopping_cart"
          color="blue"
          heading="Server payments for April"
          date="21 DEC 9:34 PM"
        ></TimelineItem>
        <TimelineItem
          icon="credit_card"
          color="yellow"
          heading="New card added for order #4395133"
          date="20 DEC 2:20 AM"
        ></TimelineItem>
        <TimelineItem
          icon="key"
          color="red"
          heading="Unlock packages for development"
          date="18 DEC 4:54 AM"
        ></TimelineItem>
        <TimelineItem
          icon="payments"
          color="dark"
          heading="New order #9583120"
          date="17 DEC"
        ></TimelineItem>

        <!-- <li>
          <div class="time">2:30 PM</div>
          <p>All hail! The time to sleep has finally arrived.😴😴😴😴😴</p>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '../public/assets/main.scss';

ul,
li {
  list-style: none;
  padding: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 0 1rem;
  padding: 0;
}
.wrapper {
  // background: #eaf6ff;
  // padding: 2rem;
  border-radius: 15px;
}
// h1 {
//   font-size: 1.1rem;
//   // font-family: sans-serif;
// }
.sessions {
  // margin-top: 2rem;
  border-radius: 12px;
  position: relative;
}
// li {
//   padding-bottom: 1.5rem;
//   border-left: 1px solid #e6e6e6;
//   position: relative;
//   padding-left: 20px;
//   margin-left: 10px;
//   &:last-child {
//     border: 0px;
//     padding-bottom: 0;
//   }
//   &:before {
//     // content: '';
//     width: 15px;
//     height: 15px;
//     background: white;
//     border: 1px solid #4e5ed3;
//     // box-shadow: 3px 3px 0px #bab5f8;
//     // box-shadow: 3px 3px 0px #bab5f8;
//     border-radius: 50%;
//     position: absolute;
//     left: -10px;
//     top: 0px;
//   }
// }

// .timeline-icon {
//   font-size: 1.2rem;
//   position: absolute;
//   left: -10px;
//   top: 0px;
// }
// .heading {
//   color: #2a2839;
//   // font-family: 'Poppins', sans-serif;
//   font-weight: 500;
//   @include mobile-and-up {
//     font-size: 0.9rem;
//   }
//   @include mobile-only {
//     margin-bottom: 0.3rem;
//     font-size: 0.85rem;
//   }
// }
// p {
//   color: #4f4f4f;
//   line-height: 1.5;
//   margin-top: 0.4rem;
//   @include mobile-only {
//     font-size: 0.9rem;
//   }
// }
</style>
