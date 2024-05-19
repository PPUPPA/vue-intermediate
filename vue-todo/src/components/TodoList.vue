<template>
  <div>
    <ul>
        <li v-for="(todoItem, index) in todoItems" :key="todoItem.item" class="shadow">
            <button @click="toggleComplete(todoItem)" class="checkBtn" :class="{checkBtnCompleted: todoItem.completed}">
                <i class="fa fa-check" aria-hidden="true"></i>
            </button>
            <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
            <button @click="removeTodo(todoItem, index)" class="removeBtn">
                <i class="fa fa-trash-alt" aria-hidden="true"></i>
            </button>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            todoItems: [],
        }
    },
    created: function(){
        if(localStorage.length > 0) {
            for(let i=0;i<localStorage.length;i++) {
                // console.log(localStorage.key(i))
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    // this.todoItems.push(localStorage.key(i));
                    console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));

                    const getItem = JSON.parse(localStorage.getItem(localStorage.key(i))); 
                    this.todoItems.push(getItem);
                }
            }
        }
    },
    methods: {
        removeTodo: function(todoItem, index){
            // console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        },
        toggleComplete: function(todoItem){
            todoItem.completed = !todoItem.completed;
            
            // 로컬 스토리지 데이터 갱신
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
    },
    // watch - todoinput
}
</script>

<style scoped>
ul {
    list-style-type: none;
    margin-top: 0;
    padding-left: 0;
    text-align: left;
}
li {
    display: flex;
    height: 50px;
    min-height: 50px;
    margin: .5rem 0;
    padding: 0 .9rem;
    background: #fff;
    border-radius: 5px;
    line-height: 50px;
}
.checkBtn {
    margin-right: 5px;
    color: #62acde;
    line-height: 45px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    color: #b3adad;
    text-decoration: line-through;
}
.removeBtn {
    width: 2rem;
    margin-left: auto;
    color: #de4343;
}

/* transition css */
.list-enter-active, .list-leave-active {
    transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
}
</style>