import axios from "axios";

const client = axios.create({
    baseURL: 'https://hotels-com-provider.p.rapidapi.com/v2',
    headers: {
      // 'Accept': 'application/json',
      'X-RapidAPI-Key': '08ab6eb829mshe1a483830e4f4dbp1f1117jsn3eb81a8c3e59',
    }
})

export default client;