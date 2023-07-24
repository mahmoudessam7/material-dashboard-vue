<script setup>
let props = defineProps({
  logo: String,
  heading: String,
  budget: String,
  percentage: String,
  team: Array
})
// console.log(props.team)
</script>
<template>
  <tr>
    <td class="ps-3">
      <div class="d-flex align-items-center gap-3">
        <img
          :src="`assets/img/small-logos/${props.logo}.svg`"
          alt="Adobe Xd Logo"
          class="table-icon avatar avatar-sm"
        />
        <h6 class="mb-0 text-sm">{{ props.heading }}</h6>
      </div>
    </td>
    <td>
      <div class="avatar-group mt-2">
        <a
          v-for="member in props.team"
          :key="member"
          href="javascript:;"
          class="avatar avatar-xs rounded-circle"
        >
          <img :src="`assets/img/${member}.jpg`" alt="team1" />
        </a>
        <!-- <a href="javascript:;" class="avatar avatar-xs rounded-circle">
          <img src="@/assets/img/team-2.jpg" alt="team1" />
        </a>
        <a href="javascript:;" class="avatar avatar-xs rounded-circle">
          <img src="@/assets/img/team-3.jpg" alt="team1" />
        </a>
        <a href="javascript:;" class="avatar avatar-xs rounded-circle">
          <img src="@/assets/img/team-4.jpg" alt="team1" />
        </a> -->
      </div>
    </td>
    <td class="align-middle fw-bold text-xs text-secondary opacity-75">{{ props.budget }}</td>
    <td>
      <div class="progress-wrapper w-75">
        <div class="fw-bold text-xs text-secondary opacity-75 mb-1">{{ props.percentage }}%</div>
        <div
          class="progress"
          style="height: 3px"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            :class="{ 'progress-bar': true, 'bg-success': props.percentage === '100' }"
            :style="`width: ${props.percentage}%`"
          ></div>
        </div>
      </div>
    </td>
  </tr>
</template>
<style scoped lang="scss">
tr {
  border-top: 1px solid #e7e7e7;
}
</style>
