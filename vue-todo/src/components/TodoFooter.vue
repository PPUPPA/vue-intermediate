<template>
    <div class="clearAllContainer">
        <button @click="clearTodo" class="clearAllBtn">Clear All</button>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo: function(){
            localStorage.clear();
        }
    }
}
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    line-height: 50px;
}
.clearAllBtn {
    width: 100%;
    color: #e20303;
}
</style>