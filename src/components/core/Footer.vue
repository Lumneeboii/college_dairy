<template>
  <div>
  <!-- <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        <div>&copy; {{ new Date().getFullYear() }}</div>
         <strong>-College Dairy</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template> -->

 <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div id="center">
              <div>&copy; {{ new Date().getFullYear() }}
              <strong>-College Dairy</strong></div>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
  </div>
</template>


<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
  }
</script>

<style>
#center{
  text-align: center;
  color: antiquewhite;
}
</style>
