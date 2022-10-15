<template>
  <main>
    <div class="about">
      <h1>This is an api test results:</h1>
      <ul>
        <li v-for="question in questions" :key="question">
        {{decode(question.question)}}
      </li>
      </ul>
      <!-- <p>
        RangQuestion {{ rangQuestion + 1 }}
        <span><button v-on:click="setRangQuestion()">Rang+</button></span>
      </p> -->
      <!-- <p v-if="loading">Loading posts...</p> -->
      <!-- <p v-if="error">{{ error.message }}</p> -->
      <!-- <button v-on:click="fetchApiTest1()">Gogo</button> -->
      <!-- <div class="one-question" v-if="rang">
        <h5>Question n°{{ rang.id }}</h5>
        <ul>
          <li>
            {{ rang.question }}
          </li>
          <ol>
            <li v-for="ans in ansTest" :key="ans">
              {{ ans }}
            </li>
          </ol>
          <li>
            {{ rang.correct_answers }}
          </li>
        </ul>
      </div> -->
    </div>
  </main>
</template>

<script setup>
import {decode} from 'html-entities';
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useApiTestStore } from "../stores/questionsApi";

const store = useApiTestStore();

const { rangQuestion, getCurrentQuestion, getAnswers, questions } = storeToRefs(store);
const { fetchApiTest1, setRangQuestion, resetRangQuestion } = store;

// const rang = getCurrentQuestion;
// const ansTest = getAnswers;

onMounted(() => {
  // resetRangQuestion();
  fetchApiTest1();
});
</script>

<style>
@media (min-width: 24px) {
  .about {
    padding: 1rem;
    margin: 0 auto;
    background-color: aliceblue;
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .list-questions {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    width: 90%;
    display: flex;
    border: 2px solid darkblue;
  }
  .one-question ul {
    list-style: none;
  }
  .one-question ul ol {
    list-style: upper-alpha;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  .one-question ul ol li {
    width: 100px;
    margin: 0.5rem;
    background-color: burlywood;
  }
}
</style>
