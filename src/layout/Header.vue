<template>
  <div class="Header">
    <h1>Header</h1>
    <a>
      <router-link to='/login'>로그인</router-link>
    </a>
  </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>
.Header {
  text-align: center;
  background-color: rgb(235, 205, 172);
}

a {
  color: #42b983;
  padding: 15px;
  border-radius: 5px;
}
</style>