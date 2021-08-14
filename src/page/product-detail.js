import Header from "../components/header";
import Footer from "../components/footer";
import { useParams } from "../utils";
import productAPI from "../api/productAPI";
import relateProduct from "../components/relateProduct";
const ProductDetailPage = {
  async render() {
    const { id } = useParams();
    const { data: product } = await productAPI.read(id);
    console.log(id);
    return /*html*/ `
        ${await Header.render()}
            <div class="px-64 w-full h-auto">
            <div class="text-center text-3xl py-8 font-bold">
            <h2>Chi tiết sản phẩm</h2>
            </div>
            <div class="flex border border-black">
            <div>
            <img src="${product.image}">

            </div>
   <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
      <div class="flex items-center">
         <h2 class="text-3xl text-gold font-medium mr-auto">${product.name}</h2>
         <p class="text-red-500 text-xl font-semibold tracking-tighter">
         $ ${product.price}
         </p>
      </div>
      <p class="text-lg text-sm text-gray-700 mt-4">
      ${product.description}
      </p>
      <div class="flex items-center justify-end mt-4 top-auto">
         
         <button class=" bg-main text-gray-200 px-2 py-2 rounded-md ">Add</button>
      </div>
   </div>
</div>
            <div>
            <div  class="text-center text-3xl py-8 font-bold">
            <h2>Sản phẩm cùng loại</h2>
            </div>
            ${await relateProduct.render()}

            ${Footer.render()}
            </div>
        `
  },
  afterRender() {},
};

export default ProductDetailPage;
