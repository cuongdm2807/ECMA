import categoryApi from "../api/catgoryApi";
import { reRender } from "../utils";

const cateSidebar = {
  async render() {
    const { data: categories } = await categoryApi.list();
    return /*html*/ `
        <div class="">
        <main class="w-full justify-center text-center">
    <div class="flex flex-col ">
        
        <section class=" bg-gold text-white text-2xl ">
            Category
        </section> 
        
        <section class="border border-black font-bold text-lg text-blue-900">
        ${categories
          .map((ele) => {
            return `<div>
              <a href="/#/shop/${ele._id}">${ele.name}</a>
            `;
          })
          .join("")}
        </section>
        
    </div>
</main>
</div>
        `;
  },
};
export default cateSidebar;
