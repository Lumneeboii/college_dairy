<template>
  <div >
     <v-toolbar class="white">

        <v-toolbar-title  v-text="title"></v-toolbar-title>
           
        <v-layout align-end justify-end row fill-height>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Sing Up</v-btn>
          <v-btn flat>Sing In</v-btn>
        </v-toolbar-items>
        </v-layout>
    </v-toolbar>

  </div>

</template>

<script>
export default {
  data(){
    return{
      title:"College Dairy"
    }
  }
  
}
</script>


 <style>

 </style>
 