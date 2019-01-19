import axios from 'axios';

const KEY = 'AIzaSyDY9DmkVBNnnueJ6VQ0L8kPpEW12UH2VYw'

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults:5,
    key:KEY
  }
})
