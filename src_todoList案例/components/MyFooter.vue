<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
            <input type="checkbox" v-model="isAll"/> 
        </label>
        <span>
            <span>已完成{{allDoneTodo}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props : ['todos' , 'checkAllTodo' , 'deleteAllDone'],
    computed : {
        total(){
            return this.todos.length;
        },
        allDoneTodo(){
            return this.todos.reduce((pre  , cur) => pre + (cur.done ? 1 : 0), 0);
        },
        isAll : {
            get(){
                return this.total === this.allDoneTodo && this.total > 0;
            },
            set(value){
                this.checkAllTodo(value);
            }
        }
    },
    methods: {
        clearAll(){
            if(confirm('确认清除所有吗？')){
                this.deleteAllDone();
            }
        }
    }
}
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }
    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }
    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>