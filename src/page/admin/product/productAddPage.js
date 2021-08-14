import productAPI from '../../../api/productAPI';
import { $, CheckLogin, getUserID } from '../../../utils';
import { v4 as uuidv4 } from "uuid";
import filebase from '../../../filebase';
import categoryApi from '../../../api/catgoryApi';
import SideBarAdmin from '../../../components/SideBarAdmin'
const ProductAddPage = {
   async render() {
    CheckLogin()
      const { data : category } = await categoryApi.list()
        return /*html*/`
        <div class="flex">
        ${SideBarAdmin.render()}
        <div class="w-4/5" >
        <form action="#" id="form-add" >
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 ">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text"  id="product-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
              </div>
              <div class="col-span-6">
              <label for="last_name" class="block text-sm font-medium text-gray-700">Image</label>
              <input type="file"  id="product-image" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
            </div>
              <div class="col-span-6 ">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Price</label>
                <input type="number"  id="product-price" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
              </div>
              <div class="col-span-6 ">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Category</label>
                <select id="cateId" class="mt-1  w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    ${category.map(x => {
            return /*html*/ `
                                            <option value="${x._id}">${x.name}</option>
                                        `
        }).join('')}
                                </select>
              </div>
              <div class="col-span-6 ">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Description</label>
                <input type="text"  id="product-description" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
              </div>
              
              <div class="col-span-6 ">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Quantity</label>
                <input type="number"  id="product-quantity" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
              </div>
              
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" value="Add product" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
      </div>
      </div>
        `
              
    },
    
   async afterRender(){
    // CheckLogin()
     const idUser = getUserID()
        $('#form-add').addEventListener('submit', e => {
            e.preventDefault();

            const productImage = $('#product-image').files[0];
          
            // let file = productImage.files[0];
            let storageRef = filebase.storage().ref(`images/${productImage.name}`);
            storageRef.put(productImage).then(function(){
              storageRef.getDownloadURL().then(async(url) => {
      
                
                const product = {
                  // id: uuidv4(),
                  name: $('#product-name').value,
                  image: url,
                  price: Number($('#product-price').value),
                  categoryId: $('#cateId').value,
                  description: $('#product-description').value,
                  status: true,
                  quantity: Number($('#product-quantity').value),
              };
              try{
                await productAPI.add(product,idUser)
                alert('add success')
              }catch(err){
                console.log(err.response);
                alert(err.response.data.error)
              }
              })
            })

            
        })
    }
}

export default ProductAddPage;