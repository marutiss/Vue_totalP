<template>
  <div>
    <h1>Header</h1>
    <router-link to="/login">로그인</router-link>
  </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>
.header {
  text-align: center;
  background-color: lightgray;
}

a {
  color: #42b983;
}
</style>