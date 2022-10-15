import axios from "axios";
import { defineStore, storeToRefs } from "pinia";
import { useCategoryStore } from "./categoryApi";

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
    // getAnswers(state) {
    //   var newArr = state.questions[state.rangQuestion].answers;
    //   for (var ans in newArr) {
    //     console.log(ans, ":", newArr[ans]);
    //     if (newArr[ans] != null) {
    //       state.arrayAnswers.push(newArr[ans]);
    //     }
    //   }
    //   return state.arrayAnswers;
    // },
  },
  actions: {
    fetchApiTest1() {
//       const cateStore = useCategoryStore;
// const {category}= storeToRefs(cateStore);
//  if (typeof category !== 'undefined') {
  
   axios
     .get("https://opentdb.com/api.php", {
       params: {
         amount: "10",
         difficulty: "easy",
       }
     })
     .then((res) => {
       console.log("voici les resultats" + res.data.results);
       this.questions = res.data.results;
      //  console.log(res.data.results)
     })
     .catch((error) => {
       alert(error);
       console.log(error);
     });
//  }
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
