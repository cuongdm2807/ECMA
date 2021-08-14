
import AuthApi from '../api/auth';
import { $ } from '../utils'
const Header = {
    async render() {
        const user = JSON.parse(localStorage.getItem('user'));
        
        return /*html*/`
            <div id="menu" class="flex justify-around w-full items-center py-3 bg-white px-64">
            <img class="w-1/6" src="../images/logo/logo1.png">
            <ul class="flex">
                <li class="px-3">
                    <a href="#/">Home</a>
                </li>
                <li class="px-3">
                    <a href="#/About">About</a>
                </li>
                <li class="px-3">
                    <a href="#/Product">Menu</a>
                    
                </li>
                
                <li class="px-32">
                    
                </li>
                
            </ul>
            <div>
                <input class="border-2 border-blue-900 rounded-lg px-3 py-1" type="text" placeholder="Mời nhập...">
                <button class="bg-main rounded-lg px-3 py-2 text-white" type="submit">Tìm Kiếm</button>
            </div>
          
            <div class="px-3 text-left">
                        <ul>
                            <li x-data="{ dropdownOpen: true }" class="relative">   
                            ${user ? /*html*/`
                                        <button @click="dropdownOpen = !dropdownOpen" id="btn_dropdown"class="relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                                            <img class="inline-block h-9 w-9 rounded-full ring-2 ring-white mr-6" src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" alt="">
                                        </button>
                                        <div x-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10"></div>
                                        <ul x-show="dropdownOpen" id="menu_dropdown" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20" >
                                            
                                            ${user.role === 1 ? `<li class="px-4 py-2 text-sm text-left border-b border-gray-400"><i class="fas fa-user-alt mr-2"></i><button id="btn_admin"class="focus:outline-none">Admin</button></li>` : ``}
                                            <li class="px-4 py-2 text-sm">
                                            <i class="fas fa-sign-out-alt mr-2"></i><button class="focus:outline-none" id="logout">Logout</button>
                                            </li>
                                        </ul>`
                : '<a href="#/signin"class="font-medium text-sm mr-6">Log in</a>'} 
                            </li>
                        </ul>
            </div>
            
            </div>
        `
    }, 
    async afterRender(){
        // if(localStorage.getItem('user')!=null){
        //     const { _id }  = JSON.parse(localStorage.getItem('user'));
        // }
        $('#logout').onclick = () => {
            if(AuthApi.signOut()){
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                window.location.hash='#/signin'; 
            }
        }
        $('#btn_admin').onclick = () => {
            window.location.hash=`#/productadmin`;
        }
    }
}
export default Header;