import axios from "axios";
import { defineStore } from "pinia";

// const AuhtStr = "Bearer".concat("J2uTmsuaKJsqli4CJYq88lksZ8lqfIzgbPPMiCVg");

export const useApiTestStore = defineStore("main", {
  state: () => ({
    questions: [],
    rangQuestion: 0,
    arrayAnswers: [],
  }),
  getters: {
    getQuestions(state) {
      return state.questions;
    },
    getCurrentQuestion(state) {
      return state.questions[state.rangQuestion];
    },
    getAnswers(state) {
      var newArr = state.questions[state.rangQuestion].answers;
      for (var ans in newArr) {
        console.log(ans, ":", newArr[ans]);
        if (newArr[ans] != null) {
          state.arrayAnswers.push(newArr[ans]);
        }
      }
      return state.arrayAnswers;
    },
  },
  actions: {
    fetchApiTest1() {
      axios
        .get("https://quizapi.io/api/v1/questions", {
          params: {
            apiKey: "J2uTmsuaKJsqli4CJYq88lksZ8lqfIzgbPPMiCVg",
            limit: "10",
            difficulty: "easy",
            tag: "html",
          },
        })
        .then((res) => {
          console.log("voici les resultats" + res.data);
          this.questions = res.data;
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    },
    setRangQuestion() {
      this.arrayAnswers = [];
      if (this.rangQuestion < 9) {
        this.rangQuestion += 1;
      } else {
        this.rangQuestion = 0;
      }
      
    },
    resetRangQuestion() {
      this.rangQuestion = 0;
    },
  },
});
