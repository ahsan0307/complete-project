<template>
 <h1> Result Cards of 9th class</h1>
  <div class="results">
    <ResultCard v-for="result in results" :key="result.id" :result="result" />
  </div>
</template>

<script>
// @ is an alias to /src
import ResultCard from "@/components/ResultCard.vue";
import ResultService from '@/services/ResultService.js'

export default {
  name: "ResultList",
  components: {
    ResultCard,
  },
  data() {
    return {
      results: null
    }
  },
  created () {
    ResultService.getResults ()
    .then(response => {
      this.results = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
.results {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
