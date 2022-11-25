import axios from 'axios';

const client = axios.create({
    baseURL: 'https://hotels4.p.rapidapi.com/',
    headers: {
      'Accept': 'application/json',
      'Authorization': '1c9a99dc48msheccd7ec3195d361p11d6aajsn4e4604c313cf'
    }
})

export default client;

//coba dipake