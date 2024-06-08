import axios from "axios"

export const apiClient=axios.create({
    baseURL:'https://lb0f150a8b.execute-api.us-east-1.amazonaws.com/v1'
})
export const baseUrl='https://lb0f150a8b.execute-api.us-east-1.amazonaws.com/v1'