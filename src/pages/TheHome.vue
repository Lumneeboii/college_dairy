<template>
  <div id="home">
    <Home></Home>
  </div>
</template>


<script>
export default {
  name:'Home',

  components:{
    Home:() =>import('@/components/home/Home'),
  }
}
</script>
