import axios from 'axios'

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID -CL-2ywqlzfli7x6Ii8V9OCM04JBzA6tNIBAHGs0Txk',
    },
    params: {
      query: term,
    },
  })
  return response.data.results
}

export default searchImages
