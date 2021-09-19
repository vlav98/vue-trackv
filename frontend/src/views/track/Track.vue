<template lang="">
    <div class="w-full">
      <div class="w-1/2 mx-auto py-4">
        <div class="w-full flex items-start justify-items-start">
          <!-- main infos -->
          <div class="w-1/2 flex flex-col justify-around gap-2">
            <p class="text-lg leading-tight font-bold text-primary">TITRE</p>
            <p class="leading-tight text-sm">AUTEUR</p>  
            <div class="flex items-start gap-2">
              <p> DATE </p>
              <p class="w-1/3"> DUREE </p>
            </div>
          </div>
          <!-- versions -->
          <div class="w-1/2 flex flex-col justify-around gap-2">
            <button class="h-10 px-4 text-white font-semibold bg-primary hover:bg-dark focus:outline-none rounded-full">
              VERSION 1 
            </button>
            <button class="h-10 px-4 text-white font-semibold bg-primary hover:bg-dark focus:outline-none rounded-full">
              VERSION 2
            </button>
            <button class="h-10 px-4 text-white font-semibold bg-primary hover:bg-dark focus:outline-none rounded-full">
              VERSION 3 
            </button>
            <button class="h-10 px-4 text-white font-semibold bg-primary hover:bg-dark focus:outline-none rounded-full">
              VERSION 4 
            </button>
            <button class="h-10 px-4 text-white font-semibold bg-primary hover:bg-dark focus:outline-none rounded-full">
              VERSION 5 
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { mapMutations, mapActions } from 'vuex'
import TrackService from '../../services/TrackService'

export default {
  name: "Track",
  components: {

  },
  data() {
    return {
      dialog: false,
      track: [],
      editedItem: undefined,
      versions: [],
      editedIndex: -1,
    }
  },
  mounted() {
    let id = this.$route.params.id
    TrackService.get(id).then((association) => {
      this.association = association
    })
    .catch((error) => {
      console.log(error)
    })
  },
  created () {
    this.fetchTrackFromApi()
  },
  methods: {
    fetchTrackFromApi () {
      let id = this.$route.params.id
      TrackService.get(id)
        .then((response) => {
          this.track = response
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  computed: {
    /* tracks() {
      console.log(this.$store.state.tracks)
      return this.$store.state.tracks
    } */
  }
}

</script>
<style lang="">
    
</style>