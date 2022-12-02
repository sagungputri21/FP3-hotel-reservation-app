import axios from 'axios';

const client = axios.create({
    baseURL: 'https://hotels-com-provider.p.rapidapi.com/v2',
    headers: {
      // 'Accept': 'application/json',
      'X-RapidAPI-Key': '1c9a99dc48msheccd7ec3195d361p11d6aajsn4e4604c313cf'
    }
})

export default client;

//coba dipake