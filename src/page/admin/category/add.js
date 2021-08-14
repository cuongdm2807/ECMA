import { $, CheckLogin, getUserID, reRender} from "../../../utils";
import { v4 as uuidv4 } from "uuid";
import categoryApi from "../../../api/catgoryApi";
import filebase from "../../../filebase";
import SideBarAdmin from "../../../components/SideBarAdmin";
import listCategory from "./list";
const addCategoryPage = {
  async render() {
    CheckLogin()
    return /*html*/ `
    <div class="flex">
        ${SideBarAdmin.render()}
        <div class="w-4/5" >
<div class="mt-10 sm:mt-0">

  <div class="mt-5 md:mt-0">
    <form action="#" id="form-add-category" >
      <div class="shadow overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 bg-white sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 ">
              <label for="first_name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text"  id="name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md">
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
</div>
</div>


        `;
  },
  async afterRender() {
    const idUser = getUserID()
    const name = $("#name");
    $("#form-add-category").addEventListener("submit", async (e) => {
      e.preventDefault();
      
          const category = {
            // id: uuidv4(),
            name: name.value,
            
          };
          console.log(category);
          if (categoryApi.add(category, idUser)) {
            alert("Thêm danh mục thành công!");
            window.location.hash = "#/categoryadmin";
            await reRender(listCategory, "#list-categores");
          }
        
     
    })
  }
}
export default addCategoryPage;
