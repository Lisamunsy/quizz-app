<template>
  <div class="home-content">
    <h1>Let's take a quizz !</h1>
    Choose one of the following subject: actual category : {{category}}
    <ul>
      <li v-for="oneCate in categories" :key="oneCate" @click="setCategory(oneCate.id)">{{croppingCategory(oneCate.name)}}</li>
      
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useCategoryStore } from '../stores/categoryApi';

const store = useCategoryStore();
const {categories, category} = storeToRefs(store);
const {fetchCategories, setCategory} = store;

// const categos= getCategories;

function croppingCategory(nomino) {
  if (nomino.includes(': ')){
    const croppedName = nomino.split(': ');
  return croppedName[1];  
  }
  return nomino;

}

onMounted(()=>{
  fetchCategories();
 
})
;
</script>

<style>
.home-content {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.home-content ul {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
}
.home-content li {
  width: 150px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #c46f2b;
  color: #151547;
  border: solid 1px white;
}
</style>
