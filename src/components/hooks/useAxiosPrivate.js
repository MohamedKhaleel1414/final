import {axiosInstance} from '../../config/axios';
import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';

const useAxiosPrivate = () =>{
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(()=>{

        const requestIntercept = axiosInstance.interceptors.request.use(
            config =>{
                if(!config.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error)=>Promise.reject(error)
        );

        const responseIntercept = axiosInstance.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if(error?.response?.status === 403 && !prevRequest?.sent){
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosInstance(prevRequest);
                }
                return Promise.reject(error)
            }
        );
        return ()=>{
            axiosInstance.interceptors.request.eject(requestIntercept);
            axiosInstance.interceptors.response.eject(responseIntercept);
        }
    },[auth,refresh])

    return axiosInstance;
}

export default useAxiosPrivate;