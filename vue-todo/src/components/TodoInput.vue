<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!-- <button @click="addTodo">add</button> -->
    <button class="addContainer" @click="addTodo">
        <i class="fas fa-plus addBtn"></i>
    </button>

    <CModal v-if="showModal" @close="showModal = false">
        <h3 slot="header">
            경고!
            <button class="closeModalBtn" @click="showModal = false">
                <i class="fa fa-times" aria-hidden="true"></i>
            </button>
        </h3>
        <template #body>
            아무것도 입력하지 않으셨습니다.
        </template>
    </CModal>
  </div>
</template>

<script>
import CModal from './common/CModal.vue';

export default {
    data(){
        return {
            newTodoItem: "",
            showModal: false,
        }
    },
    methods: {
        addTodo(){
            // console.log(this.newTodoItem);
            if(this.newTodoItem !== '')  {
                // this.$emit('이벤트 이름', 인자1, 인자2 ...);
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = "";
        },
    },
    components: { CModal },
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

.closeModalBtn {
    font-size: inherit;
    color: #42b983;
}
</style>