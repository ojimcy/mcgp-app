import { apiClient } from "./apiClient";

export const executeJwtAuthentication=(username,password)=>apiClient.post('/auth/login',{identifier:username,password});
export const register=(payLoad)=>apiClient.post('/auth/register',payLoad);
export const registerAds=(payLoad)=>apiClient.post('/adverts',payLoad);