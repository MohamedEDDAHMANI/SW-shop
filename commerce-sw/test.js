


const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers:{
        Authorization: `Bearer ${apiKey}`
    }
})