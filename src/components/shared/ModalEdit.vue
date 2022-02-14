<template>
    <div class="wrapper">
        <button @click="cancelMethod"> CANCEL</button>
        <button @click="deleteTodo">OK</button>
    </div>
</template>

<script>
export default {
    methods:{
        cancelMethod(){
            this.$emit('close')
        },
        deleteTodo(){
            this.$emit('edit')
            this.$emit('close')
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