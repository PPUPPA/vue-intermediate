import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
            for(let i=0;i<localStorage.length;i++) {
                // console.log(localStorage.key(i))
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    // this.todoItems.push(localStorage.key(i));
                    // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  
                    const getItem = JSON.parse(localStorage.getItem(localStorage.key(i))); 
                    arr.push(getItem);
                }
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state: {
        headerText: 'TODO it!',
        todoItems: storage.fetch(),
    }
});