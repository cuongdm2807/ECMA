import { axiosClient } from './axiosClient';
// import axios from "axios";

export const productAPI = {
    list(){
        const url = `/products`;
        return axiosClient.get(url)
    },
    read(id){
        const url = `/products/${id}`;
        return axiosClient.get(url)
    },
    add(product,idUser){
        const url = `/products/create/${idUser}`;
        return axiosClient.post(url,product);
    },
    remove(id,idUser) {
        const url = `/products/${id}/${idUser}`;
        return axiosClient.delete(url)
    },
    update(id,data,idUser) {
        const url = `/products/${id}/${idUser}`;
        return axiosClient.put(url,data)
    },
    productByCategory(id){
        const url = `products?categoryId=${id}`;
        return axiosClient.get(url)
    }
}

export default productAPI;