import axios from "axios";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore('cates', {
    state: () => ({
        categories: [],
        category: null,
    }),
    getters: {
        getCategories(state){
            
            return state.categories;
        },
        getCategory(state){
            return state.category;
        },
    },
    actions: {
        fetchCategories(){
            axios
            .get("https://opentdb.com/api_category.php")
            .then((res) => {
                this.categories = res.data.trivia_categories
            })
            .catch((error) => {
              alert(error);
              console.log(error);
            });
        },
        setCategory(idCategory){
            this.category = idCategory;
        }
    }
})