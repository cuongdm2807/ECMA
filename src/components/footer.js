const Footer = {
    render () {
        return /*html*/`
            <div class ="grid grid-cols-4 bg-main text-white py-4 mt-24">
                <div class="px-7 ">
                    <img class="w-24" src="../images/logo/logo2.png">
                </div>

                <div class="px-7">
                    <h1 class="font-bold text-white">Trang</h1> <hr class="">
                    <a href="#/Home"><p class="pt-2 text-sm">Home</p></a>
                    <a href="#/about"><p class="text-sm py-1">About</p></a>
                    <a href="#/product"><p class="text-sm pb-1">Menu</p></a>
                    
                </div>

                <div class="px-7">
                    <h1 class="font-bold">Liên hệ</h1> <hr class="">
                    <p class="pt-2 text-sm">Address: 22, 63/180 Lê Đức Thọ, Nam Từ Liêm, Hà Nội.</p>
                    <p class="py-3 text-sm">Hotine:  +84 917 454 310</p>
                    <p class=text-sm>Email: cuongdmph09856@fpt.edu.vn</p>
                </div>

                <div class="px-7">
                    <h1 class="font-bold">Kết nối với chúng tôi</h1> <hr class="">

                    <div class="w-52 py-3">
                        <img src="../images/icons.png">
                    </div>

                    <div class="w-52">
                        <img src="../images/unnamed.png">
                    </div>
                </div>
                
            </div>
        `
    }
}
export default Footer;