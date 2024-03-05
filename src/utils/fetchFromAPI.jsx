import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
     maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':  'cdf9b066e3mshe200d9e08c3d65bp1117d0jsn8ee730538539',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const { data }  =  await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }