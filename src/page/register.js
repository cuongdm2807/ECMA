import Header from "../components/header";
import Footer from "../components/footer";
import UserApi from "../api/userApi";
import { $ } from "../utils";
import AuthApi from "../api/auth";
import axios from "axios";
const RegisPage = {
    async render(){
        // const { data: users } = await UserApi.list();
        // const newid = users.length + 1;
        return /*html*/`
        ${await Header.render()}
        <p class="text-gray-900 text-xl font-semibold my-8 text-center tracking-widest">TẠO TÀI KHOẢN KHÁCH HÀNG MỚI</p>
            <div class="resgiter flex justify-center mb-20">
            <div class="flex flex-col  w-2/5">
                <form action="" class="border border-gray-300 rounded shadow-xl px-5 py-3 " id="form-register">
                     <input type="hidden" id="id" value="">
                    
                    <div class="flex px-4 py-3">
                        <p class="w-1/4 text-gray-500 text-sm">Tên tài khoản <span class="text-red-600 font-bold">*</span> </p>
                        <div class="w-3/4 relative">
                            <input type="text" id="name" class="w-full py-2  px-4 border border-gray-300 rounded">
                            <span class="err absolute right-3 top-3 text-xs "></span>
                        </div>
                    </div>
                    
                    <div class="flex px-4 py-3">
                        <p class="w-1/4 text-gray-500 text-sm">Mật khẩu<span class="text-red-600 font-bold">*</span> </p>
                        <div class="w-3/4 relative">
                            <input type="password" id="password" class="w-full py-2  px-4 border border-gray-300 rounded">
                            <span class="err absolute right-3 top-3 text-xs "></span>
                        </div>
                    </div>
                
                    <div class="flex px-4 py-3">
                        <p class="w-1/4 text-gray-500 text-sm">Email <span class="text-red-600 font-bold">*</span> </p>
                        <div class="w-3/4 relative">
                            <input type="text" id="email" class="w-full py-2  px-4 border border-gray-300 rounded">
                            <span class="err absolute right-3 top-3 text-xs "></span>
                        </div>
                    </div>
                    
                    <div class="flex justify-between items-center mt-10">
                        <button type="submit" class="px-8 py-3 text-sm bg-gold opacity-100  hover:opacity-80 text-white ">TẠO TÀI KHOẢN</button>  
                            <a href="#/signin" class="font-normal text-gray-900">ĐĂNG NHẬP</a>
                    </div>  
                </form>
            </div>
        </div>
        <div class="px-64">
                ${Footer.render()}
                </div>
        `
    },
    async afterRender(){
        $('#form-register').addEventListener('submit',async e => {
            e.preventDefault();
                const user = {
                    name: $('#name').value,
                    password: $('#password').value,
                    avatar:'https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png',
                    email: $('#email').value,
                    role:'0'
                }

                if(AuthApi.signUp(user)){
                    alert('Đăng ký thành công !');
                    window.location.hash='#/signin';
                }
        })
    }
}
export default RegisPage;