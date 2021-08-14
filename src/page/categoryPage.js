import productAPI from "../api/productAPI";
import { useParams } from "../utils";

const CategoryPage = {
    async render(){
        const { id } = useParams();
        console.log(id);
        const { data: products } = await productAPI.list();
        const result = products.filter(product => product.categoryId == id).map(product => {
            return `<div><a href="/#/products/${product.id}">${product.name}</a></div>`
        }).join("");
        return `${result}`
    }
}
export default CategoryPage;