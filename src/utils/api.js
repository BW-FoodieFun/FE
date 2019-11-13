import axios from 'axios'

export default function(){
    return axios.create({
        baseURL: "https://backend-foodie-fun.herokuapp.com/api",
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}