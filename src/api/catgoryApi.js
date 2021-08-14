import { axiosClient } from './axiosClient';
// import axios from "axios";

export const categoryApi = {
    list(){
        const url = `/categories`;
        return axiosClient.get(url)
    },
    read(id){
        const url = `/categories/${id}`;
        return axiosClient.get(url)
    },
    add(category,idUser){
        const url = `/categories/create/${idUser}`;
        return axiosClient.post(url,category);
    },
    remove(id,idUser) {
        const url = `/categories/${id}/${idUser}`;
        return axiosClient.delete(url)
    },
    update(id,data,idUser) {
        const url = `/categories/${id}/${idUser}`;
        return axiosClient.put(url,data)
    },
}

export default categoryApi;