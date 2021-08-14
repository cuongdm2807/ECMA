import SideBarAdmin from '../../../components/SideBarAdmin'
import categoryApi from '../../../api/catgoryApi'
import filebase from '../../../filebase';
import listCategory from './list';
const categoryAdminPage = {
    async render(){
        const {data : category} = await categoryApi.list();

        return /*html*/`
         <div class="flex">
            ${SideBarAdmin.render()}
            <main class="w-4/5">
            <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <a href="/#/addcategory"><button class="bg-gold rounded-lg px-3 py-2 text-white mx-4 my-4" type="submit">Add category</button></a>
                    ${await listCategory.render()}
                </div>
              </div>
            </div>
          </div>
            </main>
         </div>
        `
    },
    async afterRender(){
      return `${await listCategory.afterRender()}`
    }
}
export default categoryAdminPage;