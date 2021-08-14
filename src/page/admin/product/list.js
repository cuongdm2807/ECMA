import {  useParams, $, reRender, CheckLogin, getUserID} from '../../../utils';
import productAPI from '../../../api/productAPI'
const listProduct = {
    async render() {
      CheckLogin()
        const {data : products} = await productAPI.list();
        return /*html*/`
        <table class="min-w-full divide-y divide-gray-200"id="list-products">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NAME
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              IMAGE
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             
              PRICE
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              STATUS
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            QUANTITY
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ACTION
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            ${products.map((product,index)=>{
                return /*html*/ `
                        <tr>
                        <td class="text-center">
                            ${index}
                        </td>
                    <td class="px-6 py-4 whitespace-nowrap">


                            ${product.name}

                    </td>
                    <td>
                    <img class="h-10 w-10 rounded-full" src="${product.image}" alt="">
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">${product.price}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    ${product.status ? 'Còn hàng' : 'Hết hàng'}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${product.quantity}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                    <a href="/#/editproduct/${product._id}"><button class="bg-blue-600 rounded-lg px-3 py-2 text-white" type="submit">Edit</button></a>
                    <button class="bg-red-600 rounded-lg px-3 py-2 text-white btn" data-id="${product._id}">Delete</button>
                    </td>
                </tr>
                `
            }).join('')}
            

          <!-- More people... -->
        </tbody>
      </table>
        `
    },
    async afterRender(){
      CheckLogin()
      const idUser = getUserID()
        const btns = $('#list-products .btn');
        console.log(btns);
        btns.forEach(btn =>{
          const id = btn.dataset.id;
          btn.addEventListener('click', async()=>{
              console.log('oki');
            const question = confirm ('Bạn có chắc chắn muốn xóa ?');
            if(question){
                await productAPI.remove(id,idUser);
                await reRender(listProduct, '#list-products')
            }
           
          })
        })
      }
    
}
export default listProduct;