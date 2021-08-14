import Header from "../components/header";
import Footer from "../components/footer";
import UserApi from "../api/userApi";
import AuthApi from "../api/auth";
import { $ } from "../utils";
const LoginPage = {
    async render(){
        return /*html*/`
        ${await Header.render()}
        <p class="text-main text-xl font-semibold my-8 text-center ">ĐĂNG NHẬP</p>
                <div class="login flex flex-col items-center">
                    <form action="" class="border border-gray-300 shadow-lg h-96 w-2/5 px-8 py-10" id="form-login">
                        <p class="font-semibold text-gray-400 text-md mb-3">KHÁCH HÀNG ĐĂNG KÝ.</p>
                        <hr>
                        <p class="text-gray-400 my-3 text-sm">Nếu bạn có tài khoản, hãy đăng nhập bằng tên người dùng của bạn.</p>
                        <div class="mb-7 relative">
                        <input type="text" class="w-full border-2 border-gray-300 px-2 py-2  rounded focus:outline-none" placeholder="Email" id="email" >
                        <span id="err_user" class=" text-xs text-red-400 absolute right-1 top-3"></span>
                        </div>
                        <div class="relative">
                        <input type="password" class="w-full border-2 border-gray-300 px-2 py-2 rounded focus:outline-none " placeholder="Password" id="password">
                        <span id="err_pass" class=" text-xs text-red-400 absolute right-1 top-3"></span>
                        </div>
                        <div class="flex justify-center">
                            <button type="submit"
                                class="px-8 py-3 text-sm bg-gold opacity-100 mt-10 hover:opacity-80 text-white  ">ĐĂNG NHẬP</button>
                        </div>
                    </form>
                    <div class="w-2/5 mt-20 text-center mb-10">
                        <p class="text-main text-xl font-semibold mb-2">TẠO TÀI KHOẢN MỚI</p>
                        <p class="text-gray-400 text-md mb-8">Tạo tài khoản có nhiều lợi ích: thanh toán nhanh hơn, giữ nhiều địa chỉ, theo dõi đơn đặt hàng và hơn thế nữa.</p>
                        <a href="#/signup" class="px-8 py-3 text-sm bg-gold opacity-100 mt-8 hover:opacity-80 text-white ">TẠO TÀI KHOẢN</a>
                    </div>
                </div>
                <div class="px-64">
                ${Footer.render()}
                </div>
        `
    },
    async afterRender(){

        $('#form-login').addEventListener('submit',async e => {
            e.preventDefault();
                const profile = {
                    email: $('#email').value,
                    password: $('#password').value,
                }
                try {
                    const { data: userSignIn } = await AuthApi.signIn(profile);
                    // console.log(userSignIn);
                    if(localStorage.getItem('user')==null){
                        localStorage.setItem('user',JSON.stringify(userSignIn.user));
                        localStorage.setItem('token',JSON.stringify(userSignIn.token));
                    }
    
                    window.location.hash = '/';
                } catch (error) {
                    alert(error.response.data.err)
                }
              

                // fetch("http://localhost:4000/api/signin", {
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json"
                //     },
                //     body: JSON.stringify(profile)
                // })
                // .then(response => response.json())
                // .then((data) => {
                //     localStorage.setItem("user", JSON.stringify(data));
                // });
                
        })
    }

}
export default LoginPage;