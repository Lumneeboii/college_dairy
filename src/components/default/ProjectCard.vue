<template>
  <div id="Default">
  <br> <br> <br>
<v-layout  row wrap align-center>
    <v-flex md1 ></v-flex>
    <v-flex md10  >
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-container v-bind="{ [`grid-list-md`]: true }" fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 9"
              :key="n"
              xs4
            >
              <v-card flat tile>
                <v-img
                  :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                  height="150px"
                ></v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>

  <v-layout  row wrap align-center>
    <br> <br> <br>
 <v-flex md3 ></v-flex>
    <v-flex md6  >
       <v-container fluid grid-list-xl>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xl>
              <v-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`" class="image" alt="lorem" width="150" height="150">
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-container>
        </v-flex>
  </v-layout>
  </div>

</template>

<script>
export default {
  
}
</script>

<style>

</style>
