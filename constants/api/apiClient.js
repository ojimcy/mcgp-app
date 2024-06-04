import axios from "axios"

export const apiClient=axios.create({
    baseURL:'https://q5nqqpq9dk.execute-api.us-east-1.amazonaws.com/v1'
})