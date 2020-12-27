<template>
  <div class="pa-3">
    <h3>动漫列表</h3>

    <v-row>
      <v-col md="4" v-for="item in animes" :key="item.id">
        <v-card
          :to="`/animes/${item._id}`"
          class="mx-auto"
          max-width="344"
        >
        <v-img
          :src="item.cover"
          height="200px"
        ></v-img>

        <v-card-title>
          {{ item.title }}
        </v-card-title>

        <v-card-subtitle>
          id : {{ item._id }}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn text>Share</v-btn>

          <v-btn
            color="purple"
            text
          >
            Explore
          </v-btn>

          <v-spacer></v-spacer>

          
        </v-card-actions>


      </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }){
    const data = await $axios.$get('animes')
    return {
      animes: data.data
    }
  }
  
}
</script>

<style>

</style>