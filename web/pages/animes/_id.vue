<template>
  <div class="pa-3">
      <h3>{{ anime.title }}</h3>
      <v-select
        v-model="currentIndex"
        :items="episode.data.filter(v => v.animeId === anime._id).map((v, i) => ({ text: v.name, value: i, }))">

      </v-select>
      
      <video :src=ep.file width="80%" controls></video>
        
  </div>
</template>

<script>
export default {
    async asyncData({params, $axios}){
        const { id } = params
        const anime = await $axios.$get(`animes/${id}`)
        const episode = await $axios.$get(`episode`)

        return {
            id,
            anime,
            episode
        }
    },
    data(){
        return {
            currentIndex: 0
        }
    },
    computed: {
        ep(){
            return this.episode.data.filter(v => v.animeId === this.id)[this.currentIndex]
        }
    }
}
</script>

<style>

</style>