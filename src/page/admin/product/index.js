import SideBarAdmin from '../../../components/SideBarAdmin'
import { CheckLogin } from '../../../utils';

import listProduct from './list';
const ProductAdmin = {
    async render(){
        CheckLogin()

        return /*html*/`
         <div class="flex">
            ${SideBarAdmin.render()}
            <main class="w-4/5" >
            <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <a href="/#/addproduct"><button class="bg-gold rounded-lg px-3 py-2 text-white mx-4 my-4" type="submit">New Product</button></a>
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" >
                  ${await listProduct.render()}
                </div>
                
              </div>
            </div>
          </div>
            </main>
         </div>
        `
    },
    async afterRender(){
      CheckLogin()
      return `${await listProduct.afterRender()}`
    }
    
    
}
export default ProductAdmin;