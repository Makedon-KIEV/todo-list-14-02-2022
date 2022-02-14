<template>
    <div id="openModal" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <button class="todoAdd" @click="removeTodo">+</button>
            </div>
            <div>
                <button @click="addInput">Добавить</button> 
            </div>
            <div class="modal-body">    
                <input type="text" v-model="todos.heading" placeholder="Введите название TODO">
                <input type="text" v-for="(input,key) in todos.inputs" :key="key" v-model="input.value"> 
            </div>
            <div class="modal-footer">
                <button @click="saveTodos">Отправить</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
    export default {
        data(){
            return{
                todos:{
                    heading: '',
                    idTodo: uuidv4(),
                    inputs:[
                        {value:'', idTodo: uuidv4(), checked: false}
                    ]
                }
            }
        },
        methods:{
           removeTodo(){
               this.$store.dispatch('modalClose')
           },
           addInput(){
               this.todos.inputs.push( {
                   value:'', idTodo: uuidv4(),checked: false
               })
           },
           saveTodos(){
           let todo = this.todos;
            this.$store.dispatch('saveTodo', todo)
            this.removeTodo()
           }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal{
    display: flex;
    justify-content: center;
    background-color:#BCAAA4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.todoAdd{
    margin-left: auto;
    position: absolute;
    right: 30px;
    top: 30px;
}
.modal-content{
    padding-top: 90px;
}
.modal-body{
    display: flex;
    flex-direction: column;
}

</style>