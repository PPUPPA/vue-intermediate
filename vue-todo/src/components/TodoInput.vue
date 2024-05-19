<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!-- <button @click="addTodo">add</button> -->
    <button class="addContainer" @click="addTodo">
        <i class="fas fa-plus addBtn"></i>
    </button>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            newTodoItem: "",
        }
    },
    methods: {
        addTodo: function(){
            // console.log(this.newTodoItem);
            if(this.newTodoItem !== '')  {
                let obj = {completed: false, item: this.newTodoItem};
                localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
                this.clearInput();
            }
        },
        clearInput: function(){
            this.newTodoItem = "";
        },
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    display: flex;
    height: 50px;
    background: #fff;
    border-radius: 5px;
    line-height: 50px;
}
.inputBox input {
    flex: 1 1 auto;
    height: 100%;
    padding: 0 .9rem;
    border-style: none;
    font-size: .9rem;
}
.addContainer {
    display: block;
    width: 3rem;
    background: linear-gradient(to right, #6478FB, #8763FB);
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: #fff;
    vertical-align: middle;
}
</style>