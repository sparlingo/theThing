<template functional>
  <div class="single-team">
    <card>
      <h2>
        <router-link :to="`/team/${props.team.id}`">{{props.team.name}}</router-link>
      </h2>
      <h4>{{props.votes}}%</h4>
      <button primary @click="listeners['vote']">Vawt</button>
    </card>
  </div>
</template>

<style scoped>
  .single-team {
    text-align: center;
    padding: 20px;
  }
</style>