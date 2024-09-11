import axios from "axios";

const api = axios.create({
    baseURL: 'https://dummyjson.com/'
})
class Api {
    static getProduct(){
        return api.get('products/category/food');
    }
    static getCategories(){
        return api.get('products/categories');
    }
}

export default Api;