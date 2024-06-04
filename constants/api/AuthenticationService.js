import { apiClient } from "./apiClient";
/* export const executeBasicAuthentication=(token)=>apiClient.get('/basicauth',{
    headers:{
        Authorization: token
    }
}); */
export const executeJwtAuthentication=(username,password)=>apiClient.post('/auth/login',{identifier:username,password});
export const register=(username,password)=>apiClient.post('/auth/register',{username,password});