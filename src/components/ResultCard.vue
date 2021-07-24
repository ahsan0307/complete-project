<template>
  <router-link class="event-link" :to="{name: 'ResultDetails', params: {id: result.id} }">
  <div class="result-card">
    <span>Student:{{result.name}}<br>Position:{{result.position}}</span>
    <h4>Class {{result.class}}</h4>
  </div>
  </router-link>
</template>

<script>
export default {
  props: {
    result: {
     type: Object,
     required: true
    }
  }
}
</script>

<style scoped>
.result-card {
padding: 20px;
 width: 250px;
 cursor: pointer;
 border: 1px solid #39495c;
 margin-bottom: 18px;
}
.result-card:hover {
transform: scale(1.01);
box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
