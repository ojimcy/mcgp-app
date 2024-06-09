import { apiClient } from "./apiClient";

export const executeJwtAuthentication=(username,password)=>apiClient.post('/auth/login',{identifier:username,password});
export const register=(payLoad)=>apiClient.post('/auth/register',payLoad);
export const registerAds=(payLoad)=>apiClient.post('/adverts',payLoad);
export const registerCategory=(payLoad)=>apiClient.post('/category',payLoad);
export const getCategories=()=>apiClient.get('/category');