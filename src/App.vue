<template>
<!-- App.vue -->
  <div id="app">
  <header class="header__header">
    <div>
      <router-link to="/"  tag="span" class="pointer">Главная</router-link>
    </div>
  </header>
  <main>
    <router-view></router-view> 
  </main>
  </div>
</template>




<script>

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style >
*{
  margin: 0;
}
.header__header{
  flex-wrap: wrap;
  display: flex;
  justify-content:space-between ;
  width: 100%;
  background-color: #3F51B5;
  line-height: 30px;
  padding: 0 2em;
  box-sizing: border-box;
}
.header__ul{
  padding: 0 4rem;
  list-style-type: none;
  color: #4DB6AC;
}
.pointer{
  cursor: pointer;
}
</style>
