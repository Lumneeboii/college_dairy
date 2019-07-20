<template>
  <v-app>
    <core-ToolBar/>
    <core-Page/>
    <core-Footer/>
  </v-app>
  
</template>

<script>
export default {
  name:'App',
  components:{
    CoreToolBar: ()=>import('@/components/core/ToolBar'),
    CorePage: ()=>import('@/components/core/Page'),
    CoreFooter: ()=>import('@/components/core/Footer'),
  },
  data(){
    return{
      // 
    }
  }
}
</script>

<style>

</style>


