<template>
  <div class="black-bg" v-if="openModal==true">
  <div class="white-bg">
    <h4>로그인</h4>
    <button>테스트</button>
  </div>
  </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data(){
        return{
            

        }
    },
    props:{
        openModal : Boolean,
    }
}
</script>

<style>
.black-bg{
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}
.white-bg{
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>