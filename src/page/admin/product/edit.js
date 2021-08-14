import productAPI from '../../../api/productAPI'
import { useParams, $ ,CheckLogin, getUserID, reRender} from '../../../utils';
import categoryApi from '../../../api/catgoryApi';
import filebase from '../../../filebase';
import SideBarAdmin from '../../../components/SideBarAdmin'
import listProduct from './list';
const ProductEditPage = {
    async render(){
      CheckLogin()
        const { id } = useParams();
        const { data: product } = await productAPI.read(id);
        console.log(product);
        const { data : category } = await categoryApi.list()
        return /*html*/ `
        <div class="flex">
        ${SideBarAdmin.render()}
        <div class="w-4/5" >
        <form action="#" id="form-edit" >
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
          <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 ">
            <label for="first_name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" value="${product.name}" id="product-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
          </div>
          <div class="col-span-6">
          <label for="last_name" class="block text-sm font-medium text-gray-700">Image</label>
          <div class="bg-cover bg-center w-40 h-40" style="background-image: url(${product.image})"></div>
          <input type="hidden" value="${product.image}" id="old_image">
          <input type="file"  id="product-image" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
        </div>
          <div class="col-span-6 ">
            <label for="first_name" class="block text-sm font-medium text-gray-700">Price</label>
            <input type="number" value="${product.price}" id="product-price" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
          </div>
          <div class="col-span-6 ">
            <label for="first_name" class="block text-sm font-medium text-gray-700">Category</label>
            <select id="cate_id"  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              ${category.map(cate=>{
                return /*html*/ `
                <option ${cate._id===product.categoryId ? 'selected' : ''} value="${cate._id}">${cate.name}</option>
                `
              })}
                </select>
          </div>
          <div class="col-span-6 ">
            <label for="first_name" class="block text-sm font-medium text-gray-700">Description</label>
            <input type="text" value="${product.description}" id="product-description" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
          </div>
          <div class="col-span-6 ">
            <label for="first_name" class="block text-sm font-medium text-gray-700">Status</label>
            <input type="text" value="${product.status}" id="product-status" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
          </div>
          <div class="col-span-6 ">
            <label for="first_name" class="block text-sm font-medium text-gray-700">Quantity</label>
            <input type="number" value="${product.quantity}" id="product-quantity" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
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
      CheckLogin()
      const idUser = getUserID()
        const { id } = useParams();
        const { data: product } = await productAPI.read(id);

        $('#form-edit').addEventListener('submit', async(e) =>{
            e.preventDefault();
            console.log('old', product);
            const productImage = $('#product-image').files[0];
        
            if(productImage){
                 // let file = productImage.files[0];
                let storageRef = filebase.storage().ref(`images/${productImage.name}`);
                storageRef.put(productImage).then(function(){
                  console.log('Upload thành công');
                  storageRef.getDownloadURL().then(async (url) => {
          
                    
                    const newProduct = {
                      ... product,
                      name: $('#product-name').value,
                      image: url,
                      price: Number($('#product-price').value),
                      categoryId: $('#cate_id').value,
                      description: $('#product-description').value,
                      status: $('#product-status').value,
                      quantity: Number($('#product-quantity').value),
                      
                  };
                  try{    
                    await productAPI.update(id, newProduct, idUser);
                    window.location.hash = '/productadmin'
                    await reRender(listProduct, '#list-products')
                }catch (err){
                    alert(`${err.response.data.error}`);
                }
                  
                  
                  })
                })
              }else{
                const newProduct = {
                  ... product,
                  name: $('#product-name').value,
                  image: $('#old_image').value,
                  price: Number($('#product-price').value),
                  categoryId: $('#cate_id').value,
                  description: $('#product-description').value,
                  status: $('#product-status').value,
                  quantity: Number($('#product-quantity').value),
              };
              try{    
                await productAPI.update(id, newProduct, idUser);
                window.location.hash = '/productadmin'
                await reRender(listProduct, '#list-products')
            }catch (err){
                alert(`${err.response.data.error}`);
            }
              }
            
        })
       
    }

}
export default ProductEditPage;