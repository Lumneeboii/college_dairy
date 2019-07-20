<template>
   <div >
    <projectcard/>
  </div>
</template> 


<script>
export default {
  name:'Default',
  components:{
    projectcard:()=> import('@/components/default/ProjectCard'),
  }
}
</script>


<style>
  
</style>