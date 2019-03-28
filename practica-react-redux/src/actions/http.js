import axios from 'axios'

const http = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2/'
})

export default http; 