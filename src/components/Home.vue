<template>
    <div class="wrapper">
        <div>
            <button class="todoAdd" @click="openModal">+</button>
        </div>
        <div class="d-f">
            <div class="todoCard" v-for="(todo, key) in todos" :key="key" >
                <h1>{{todo.heading}}</h1>
                <input type="hidden" :value="todo.idTodo">

                <div v-for="(input, key) in todo.inputs.slice(0,3)" :key="key" > 
                    <input type="checkbox" :id="input.idTodo" name="scales" disabled :checked="input.checked">
                    <label :for="input.idTodo">{{input.value}}</label>
                </div>
                <div class="wrapBtn">
                    <router-link :to="'/edit/' + todo.idTodo" tag="button">Edit</router-link>
                    <button @click="deleteTodoModal(todo.idTodo)">Delete</button> 
                </div>
            </div>
        </div>
        <app-modal-delete-todo v-if="modalDelete" :idTodo="getIdTodo"></app-modal-delete-todo>
        <app-modal-add-todo  v-if="modal"></app-modal-add-todo>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
  export default{
    data(){
      return{
      }
    },
    methods:{
      ...mapActions({
            idTodoAdd: 'idTodoAdd',
            modalDeleteOpen:'modalDeleteOpen',
            modalOpen:'modalOpen',
            modalClose:'modalClose'
        }),
        deleteTodoModal(id){
            this.idTodo = id;
            this.idTodoAdd(id);
            this.modalDeleteOpen();
        },
        openModal(){
            this.modalOpen();
        },
        modalClose(){
            this.modalClose()
        }
    },
    computed:{
        ...mapGetters({
            inputTodo: 'inputTodo',
            todos: 'todoGet',
            modal: 'modalOpen',
            modalDelete: 'modalDelete',
            getIdTodo: 'getIdTodo',
            shortList: 'inputs',
        }),
    }
  }
</script>
<style scoped>
  .todoAdd{
    display: block;
    margin-left: auto;
    margin-right: 30px;
    margin-top: 10px;
    width: 30px;
    height: 30px;
    background-color: #EF6C00;
    border: none;
    border-radius: 30px;
    cursor: pointer;
  }
  .d-f{
    display: flex;
    justify-content: space-between;
    flex-grow: grow;
    padding-left: 10em;
    padding-top: 3em;
    padding-right: 10em;
    box-sizing: border-box;
    flex-wrap: wrap;
  }
  .todoCard{
    width: 300px;
    background-color:#BBDEFB;
    margin-bottom: 3em;
  }
</style>
