
import { v4 as uuidv4 } from 'uuid';

export default {
    state:{
        modalOpen: false,
        modalDelete: false,
        todos:Array,
        idTodo: null
    },
    mutations:{
        addInput(state, payload){
            state.todos.inputs.push(payload)
        },
        modalOpen(state){
            state.modalOpen = true
        },
        modalClose(state){
            state.modalOpen = false
        },
        saveTodo(state, payload){
            if(state.todos == null){
                state.todos = []
            }
            state.todos.push(payload);
            let serialObj = JSON.stringify(state.todos)
            localStorage.setItem("todos", serialObj);
        },
        modalDeleteOpen(state){
            state.modalDelete = true
        },
        modalDeleteClose(state){
            state.modalDelete = false
        },
        deleteTodo(state, payload){
            let todos = JSON.parse(localStorage.getItem("todos"))
            let todosNew = todos.filter(todo => todo.idTodo.toString() !== payload.toString())
            let serialObj = JSON.stringify(todosNew)
            localStorage.setItem("todos", serialObj);
            state.todos = state.todos.filter(todo => todo.idTodo.toString() !== payload.toString())
        },
        idTodoAdd(state, payload){
            state.idTodo = payload
        },
        editTodo(state, payload){
            let todos = JSON.parse(localStorage.getItem("todos"))
            let todoIdxLocal = todos.findIndex(todos =>{
                    return todos.idTodo === payload.idTodo
            })
            todos.splice( todoIdxLocal, 1, payload )
            let serialObj = JSON.stringify(todos)
            localStorage.setItem("todos", serialObj);

            let todoIdx =  state.todos.findIndex(todos =>{
                    return todos.idTodo === payload.idTodo
            })
            state.todos.splice( todoIdx, 1, payload )
        }
    },
    actions:{
        async addInput({commit}, payload){
                commit('addInput', payload)
        },
        async saveTodo({commit}, payload){
                commit('saveTodo', payload)
        },
        async modalOpen({commit}){
            commit('modalOpen')
        },
        async modalClose({commit}){
                commit('modalClose')
        },
        async modalDeleteOpen({commit}){
            commit('modalDeleteOpen')
        },
        async modalDeleteClose({commit}){
                commit('modalDeleteClose')
        },
        async deleteTodo({commit}, payload){

                commit('deleteTodo', payload)
        },
        async idTodoAdd({commit}, payload){
                commit('idTodoAdd', payload)
        },
        async editTodo({commit}, payload){
                commit('editTodo', payload)
        }
    },
    getters:{
        todoGet(state){
                state.todos = JSON.parse(localStorage.getItem("todos"))
                return state.todos
        },
        inputTodo(state){
                return state.todos
        },
        modalOpen(state){
                return state.modalOpen
        },
        modalDelete(state){
                return state.modalDelete
        },
        getIdTodo(state){
                return state.idTodo
        },
        getIdUui(){
            console.log(uuidv4);
        },
        getTodoId(state){
            return id =>{
                return state.todos.find(todo=> todo.idTodo.toString() == id.toString())
            }
        }
    }
}