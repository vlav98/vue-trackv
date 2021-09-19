import axios from 'axios'

const TrackService = {
  getAll: async () => {
    const response = await axios.get('track')
    const result = response.data.rows

    return result
  },
  getVersions: async (idTrack: any) => {
    const response = await axios.get(`track/${idTrack}/versions`)
    const result = response.data.rows

    return result
  },
  get: async (id: any) => {
    const response = await axios.get(`track/${id}`)
    const result = response.data.rows[0]

    return result
  },
  create: async (title: any) => {
    const response = await axios.post('track/create', {
      title_track: title,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    const result = response.data.rows
    return result
  },
  delete: async (item: any) => {
    const response = await axios.delete('track', {
      data: { id_track: item }
    })
    const result = response.data.rows
    return result
  },
  modify: async (editedIndex: any, title: any) => {
    const response = await axios.put('track', {
      id_track: editedIndex,
      title_track: title,
    })
    const result = response.data
    return result
  }
}

export default TrackService