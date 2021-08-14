import categoryApi from "../../../api/catgoryApi";
import SideBarAdmin from "../../../components/SideBarAdmin";
import { useParams, $, CheckLogin, getUserID} from '../../../utils';
import filebase from '../../../filebase';
import listCategory from '../category/list'


const CategotyEditPage = {
    
    async render() {
      CheckLogin()
        const { id } = useParams();
        const { data: category } = await categoryApi.read(id);
        console.log(category);
        return /*html*/`
        <div class="flex">
        ${SideBarAdmin.render()}
        <div class="w-4/5" >
        <form action="#" id="form-edit" >
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 ">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" value="${category.name}" id="category-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
              </div>
              
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
      const idUser = getUserID()
      const { id } = useParams();
      const { data: category } = await categoryApi.read(id);

      $('#form-edit').addEventListener('submit',async (e) =>{
        e.preventDefault();
              const newCategory = {
                ... category,
                name: $('#category-name').value,

            };
            console.log('Upload thành công');
            try{    
              await categoryApi.update(id, newCategory, idUser);
              window.location.hash = '/categoryadmin'
              await reRender(listCategory, '#list-categores')
          }catch (err){
              alert(`${err.response.data.error}`);
          }
    })
    }
}
export default CategotyEditPage