import productAPI from "../api/productAPI";
import { reRender, useParams } from "../utils";

const relateProduct = {
    async render(){
        const {id} = useParams()
        const { data : products } = await productAPI.productByCategory(id)
        const result = products
      .map((product) => {
        return /*html*/ `
          <div class=" h-auto group overflow-hidden">
          <a href="#/products/${product.id}">
          <div class=" w-full h-96 bg-gray-500 bg-no-repeat bg-cover bg-center  "
                style="background-image: url('${product.image}');">
            </div>
          </a>
            <div class="text-center mt-5">
            <a  class="text-md font-normal uppercase text-gray-500 ">${product.name}</a>    
                <div class="flex mt-3">
                        <div class="flex-1">
                        <button class="border-b-2 border-black font-bold  text-sm add-to-cart focus:outline-none transform -translate-x-32 group-hover:translate-x-20 transition-all duration-500" data-id="${product.id}">ADD TO CARD</button>
                        </div>
                        <div class="flex-1">
                        <p class="font-extrabold text-md transform -translate-x-16 group-hover:translate-x-40 transition-all duration-500">$${product.price}</p>
                        </div>
                </div>
            </div>
        </div>
              `;
      })
      .join("");
        return /*html*/ `
        <div class="grid grid-cols-4 gap-5  mt-6 tabcontent">
        ${result}
        </div>
        
    `
    }
}
export default relateProduct;