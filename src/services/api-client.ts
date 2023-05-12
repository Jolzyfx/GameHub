import axios from "axios"

export interface FetchResponse<T>{
  count: number
  results: T[]
 }

 export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{ 
    key: '394b6972ebe848aabfb4aaf501ffe335'
  }
})