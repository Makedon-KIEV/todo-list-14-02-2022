<template>
    <div class="wrapper">
        <button @click="cancelMethod"> CANCEL</button>
        <button @click="deleteTodo">OK</button>
    </div>
</template>

<script>
 export default{
     props:['idTodo'],
       methods:{
           cancelMethod(){
               this.$store.dispatch('modalDeleteClose')
           },
           deleteTodo(){
               this.$store.dispatch('deleteTodo', this.idTodo)
               this.$store.dispatch('modalDeleteClose')
           }
       }

   }

</script>
  
<style scoped>
    .wrapper{
        position: absolute;
        top: 50%;
        left: 50%;
        height: 300px;
        width: 300px;
        transform: translate( -50%, -50%);
        background-color:red;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>