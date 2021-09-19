import { createStore } from "vuex"
import axios from 'axios';

export default createStore({
  state: {
    tracks: [
      { id: 0, title: "Track 1", releaseDate: new Date(2021, 4, 10), author: "Author 1" },
      { id: 1, title: "Track 2", releaseDate: new Date(2021, 5, 10), author: "Author 2" },
      { id: 1, title: "Track 3", releaseDate: new Date(2021, 1, 1), author: "Author 3" },
    ]
  },
  mutations: {
    tracks(state, tracks) {
      return state.tracks = tracks
    }
  },
  actions: {    
    /* createTrack({ data }, track) {
      axios.post('/', {
        body: { title: track.title, releaseDate: track.releaseDate, author: track.author }
      })
      .then(response => {})
      .catch(e => {
        // this.errors.push(e)
      })
      // state.tracks.push({ id: track.id, title: track.title, releaseDate: track.releaseDate, author: track.author });
    },
    getTrack({ data }) {
      axios.get('/', {

      })
    },
    updateTrack({ data }, id) {
      
    } */
  },
  modules: {},
});
