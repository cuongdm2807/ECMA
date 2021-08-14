import SideBarAdmin from '../../components/SideBarAdmin'
import { CheckLogin } from '../../utils';
const DashBoards = {
  async render() {
    CheckLogin()
    return /*html*/ `
        <div class="flex">
       ${await SideBarAdmin.render()}
    <main class="w-4/5" >
   
    </main>

        </div>

    
        `;
  },
  async afterRender(){
    // return `${await index.afterRender()}`
  }
};
export default DashBoards;
