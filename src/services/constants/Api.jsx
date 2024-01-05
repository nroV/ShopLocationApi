import axios, {isCancel, AxiosError} from 'axios';


const mainUrl = 'https://www.the-mapp.com/v1/properties'
export const axiosClient = axios.create({
    baseURL:mainUrl
 
})

