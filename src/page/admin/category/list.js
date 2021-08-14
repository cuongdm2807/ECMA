import categoryApi from "../../../api/catgoryApi";
import {  useParams, $, reRender, CheckLogin, getUserID} from '../../../utils';
import filebase from '../../../filebase';

const listCategory = {
    
    async render(){
      CheckLogin()
        const {data : category} = await categoryApi.list();
        return /*html*/ `
        <table class="min-w-full divide-y divide-gray-200" id="list-categores">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NAME
            </th>
            
            
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ACTION
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            ${category.map((category,index)=>{
                return /*html*/ `
                        <tr>
                        <td class="text-center">
                            ${index}
                        </td>
                    <td class="px-6 py-4 whitespace-nowrap">


                            ${category.name}

                    </td>
                    
                   
                    <td class="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                    <a href="/#/editcategory/${category._id}"><button class="bg-blue-600 rounded-lg px-3 py-2 text-white" type="submit">Edit</button></a>
                    <button class="bg-red-600 rounded-lg px-3 py-2 text-white btn" data-id="${category._id}">Delete</button>
                    </td>
                </tr>
                `
            }).join('')}
          
        </tbody>
      </table>
        `
    },
    async afterRender(){
      const idUser = getUserID()
        const btns = $('#list-categores .btn');
        console.log(btns);
        btns.forEach(btn =>{
          const id = btn.dataset.id;
          btn.addEventListener('click', async()=>{
              console.log('oki');
            const question = confirm ('Bạn có chắc chắn muốn xóa ?');
            if(question){
                await categoryApi.remove(id,idUser);
                await reRender(listCategory, '#list-categores')
            }
           
          })
        })
      }
}
export default listCategory;