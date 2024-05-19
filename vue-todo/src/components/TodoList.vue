<template>
  <div>
    <transition-group name="list" tag="ul">
        <li v-for="(todoItem, index) in this.$store.state.todoItems" :key="todoItem.item" class="shadow">
            <button @click="toggleComplete(todoItem, index)" class="checkBtn" :class="{checkBtnCompleted: todoItem.completed}">
                <i class="fa fa-check" aria-hidden="true"></i>
            </button>
            <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
            <button @click="removeTodo(todoItem, index)" class="removeBtn">
                <i class="fa fa-trash-alt" aria-hidden="true"></i>
            </button>
        </li>
    </transition-group>
  </div>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        removeTodo(todoItem, index){
            // console.log(todoItem, index);

            this.$emit('removeItem', todoItem, index);
        },
        toggleComplete(todoItem, index){
            this.$emit('toggleItem', todoItem, index);
        }
    },
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