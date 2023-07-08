<template>
  <div class="app">
    <header>
      <div class="title">
        <img src="./assets/heart.svg" alt="">
        <h1>Hyrule Jobs</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('salary')">Order by salary</button>
        <button @click="handleClick('location')">Order by location</button>
      </div>
    </header>
   <JobsList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Job from '@/types/Jobs';
import OrderType from '@/types/OrderType';
import JobsList from '@/components/JobsList.vue';
export default defineComponent({
  name: 'App',
  components: { JobsList
  },
  setup() {
    const jobs = ref<Job[]>([
      {title: 'farm worker', location: 'Vancouver', salary: 30000, id: '1'},
      {title : 'quarryman', location: 'death valley', salary: 40000, id: '2'},
      {title : 'miner', location: 'the lost woods', salary: 35000, id: '3'},
      {title : 'lumberjack', location: 'lake hylia', salary: 21000, id: '4'},
      {title : 'fisherman', location: 'the great sea', salary: 32000, id: '5'},
    ]);
    const order = ref<OrderType>('title');
    const handleClick = (term: OrderType) => {
      order.value = term;
      console.log(order.value)
    }
    return {
      jobs,
      handleClick,
      order
    }
  }
});
</script>

<style>
  header {
    text-align: center;
  }
  header .order {
    margin-top: 20px;
  }
  button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  header .title {
    display: flex;
    justify-content: center;
  }
  header img {
    width: 60px;
    margin-right: 20px;
  }
  header h1 {
    font-size: 3em;
  }
</style>
