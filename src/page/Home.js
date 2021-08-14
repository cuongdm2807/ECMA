import Header from '../components/header'
import Footer from '../components/footer'
const HomePage  = {
    async render(){
        return /*html*/`
            ${await Header.render()}
            <div class="text-black pt-4 w-full px-64">
            <div class=" pb-8">
            <img class="w-full" src="././images/news1.jpg">
            </div>
            <div class="grid grid-cols-3">
            <div class="grid grid-cols-3 gap-4">
                <div>
                    <img class="w-1/2" src="././images/icon/dat.hang.truc.tuyen.png">
                </div>
                <div class="col-span-2">
                    <h2 class="font-bold">Đặt hàng trực tuyến</h2>
                    <p>Đặt hàng qua điện thoại</p>
                </div>
            
            </div>
            <div class="grid grid-cols-3 gap-4">
                <div>
                    <img class="w-1/2" src="././images/icon/freeship.png">
                </div>
                <div class="col-span-2">
                    <h2 class="font-bold">Miễn phí vận chuyển</h2>
                    <p>Với các đơn hàng từ 200k trở lên</p>
                </div>
            
            </div>
            <div class="grid grid-cols-3 gap-4">
                <div>
                    <img class="w-1/2" src="././images/icon/thanh.toan.an.toan.png">
                </div>
                <div class="col-span-2">
                    <h2 class="font-bold">Thanh toán an toàn</h2>
                    <p>Bảo vệ thanh toán trực tuyến</p>
                </div>
            
            </div>
        </div>

        <h1 class="text-2xl py-5 text-center font-bold">Trà là thức uống của sức khỏe</h1>
        <p class="text-center py-3">
            Trà không chỉ là một loại thức uống ấm để bạn khởi đầu một ngày mới mà còn là một thần dược của cơ thể. Đây là loại thức uống ngày càng trở nên phổ biến nhờ tác dụng làm giảm nguy cơ mắc các chứng bệnh tim mạch, ung thư, tiểu đường,bệnh nướu răng, đồng thời giúp giảm stress và giảm cân hiệu quả. Các chuyên gia nghiên cứu về trà khuyên chúng ta nên uống trà mỗi ngày…
        </p>
        <iframe class="pt-5" width="1200" height="550" src="https://www.youtube.com/embed/oQrdiSi3YAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1 class="text-2xl py-5 text-center font-bold">Sản phẩm nổi bật</h1>
        <h1 class="text-2xl py-5 text-center font-bold py-8">Lợi ích của trà</h1>

        <div class="grid grid-cols-3 gap-8 pb-5" >
            <div class="flex-col flex justify-center items-center">
                <img class="w-1/3" src="../images/icon/cai.thien.tam.nhin.png">
                <h2 class="font-bold">Cải thiện tầm nhìn của mắt</h2>
                <p>
                    Theo nghiên cứu mới đây, uống một cốc trà nóng vào buổi chiều có tác dụng cải thiện thị lực và phòng ngừa các căn bệnh về mắt như bệnh glôcôm hay còn gọi là bệnh cườm nước.
                </p>
            </div>

            <div class="flex-col flex justify-center items-center ">

                <img class="w-1/3" src="../images/icon/giam.can.png">

                <div class="text-center">
                <h2 class="font-bold">Giảm cân</h2>
                <p>
                    Lá trà luôn chứa rất nhiều hợp chất có lợi cho sức khỏe. Một trong những hợp chất của trà là caffeine, caffeine là 1 chất kích thích phổ biến được chứng minh có tác dụng đốt cháy mỡ thừa.
                </p>
                </div>
                
            </div>

            <div class="flex-col flex justify-center items-center">
                <img class="w-1/3" src="../images/icon/suc.khoe.tim.mach.png">
                <h2 class="font-bold">Sức khỏe tim mạch</h2>
                <p>
                    Đã từ rất lâu rồi, trà luôn đứng đầu trong danh sách các loại thực phẩm tự nhiên chứa nhiều chất có lợi cho sức khỏe. Giúp cơ thể chống lại các gốc tự do gây hại chống lại bệnh tim mạch.
                </p>
            </div>

        </div>
                <div class="w-full h-auto">
                    <h1 class="text-2xl py-8 text-center font-bold">Địa chỉ</h1>
                    <img class="w-full h-full" src="../images/map.png">
                </div>
                
                
            </div>
            <div class="px-64">
            ${Footer.render()}
            </div>
           
        `
    },
    async afterRender(){
        return `
        ${await Header.afterRender()}
        `
        
    }
}
export default HomePage;