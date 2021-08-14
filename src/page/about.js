import Header from '../components/header'
import Footer from '../components/footer'
const AboutPage = {
    async render() {
        return /*html*/`
        ${await Header.render()}
            <div class="pb-12 px-64">
                <div>
                    <img class="h-52 w-full pt-3" src="../images/banner.jpg">
                </div>
                <div>
                    <h1 class="text-3xl py-5 text-center">Ý tưởng tên quán</h1>

                    <h1>
                        <i class="text-xl font-bold">Đây là một bộ nhận diện thương hiệu cho quán British Tea được mới được thành lập và chuẩn bị khai trương cơ sở đầu tiên ở Hà Nội.</i>
                    </h1>

                    <h1 class="text-xl font-bold py-2">Ý tưởng tên British Tea:</h1>

                    <i>
                    Đó là vào năm 1840, khi nữ công tước thứ 7 của Bedford – bà Anna tự hình thành cho mình thói quen thưởng trà cùng bạn bè vào mỗi buổi chiều. Trong bữa tiệc trà đó có trà, bánh mì, bơ và bánh ngọt. Sau đó thói quen này mang tính xã hội cao hơn, vào thập kỷ 60 của thế kỉ 19, nhiều tập tục nghi thức sang trọng, tao nhã được thực hiện trong bữa trà chiều. Các tầng lớp thượng lưu và phụ nữ mặc trang trọng với áo dài, đeo găng tay và đội mũ trong thời gian diễn ra trà chiều từ 4 – 5 giờ chiều ở phòng khách. Người chủ tiệc sẽ rót trà, bánh quy được dùng thay bánh sandwich để các quý bà có thể ăn mà không cần bỏ găng tay. Trà cũng được ăn cùng với đa dạng các món được bày biện rất đẹp mắt trên bàn trà. Từ bao giờ mà điều này trở thành thói quen của người dân Anh. Thậm chí giờ giải lao trong tiếng Anh chúng ta đều biết là “Tea breaks”. Trà Chiều chính là tinh hoa của văn hóa Anh, trong buổi tiệc trà thì ta có thể cảm nhận được sang trọng trong việc thưởng thức trà được pha trong ấm sứ và những chiếc bánh quy thơm ngon.
                    </i>

                    <h1 class="text-xl font-bold py-2">Khách hàng hướng đến</h1>

                    <i>
                    Hiện nay thì lượng khách hàng uống trà hầu như là khách hàng trẻ. Giới trẻ hiện nay thường thích đến những nơi mới lạ mang phong cách Châu Âu, hơn nữa phải có cảnh đẹp để chụp ảnh sống ảo. British Tea sẽ là một như lý tưởng để giới trẻ này hướng đến vì phong cách khác biệt tái hiện lại cảm giác khi được thưởng thức buổi trà chiều của Vương Quốc Anh.
                    </i>

                    <h1 class="text-3xl text-center py-5">Giới thiệu về quán</h1>

                    <h1 class="text-xl font-bold py-2">Đặc điểm của quán:</h1>

                    <i>
                    Trà được pha trong ấm sứ, nước đun sôi tinh khiết mang hãm chè để hương vị trà phai dần ra. Người ta còn cho thêm sữa và đường tùy khẩu vị người thưởng thức. Trà thường dùng loại trồng ở Ấn Độ hoặc Sriklanka và được đựng trong ấm trà bạc cùng những chiếc tách vô cùng tinh tế. Ngày nay người ta còn thay trà truyền thống trước kia bằng trà sữa, trà chanh… Có ba loại hình trà chiều chính: <br>
                    – Cream tea: chỉ gồm trà và scone với mứt và kem <br>
                    – Light tea: gồm trà, scone và bánh ngọt <br>
                    – Full tea: gồm đầy đủ trà, bánh sandwich nhỏ hoặc món khai vị, scone và bánh ngọt
                    </i>

                    <h1 class="text-xl font-bold py-2">Tầm nhìn</h1>

                    <i>
                    British Tea nhắm vào giới trẻ trong nước để giới thiệu phong cách dùng trà của đất nước phía Tây Bắc lục địa Châu Âu để quảng cáo văn hóa đất nước họ đến với đất nước mình. Không chỉ mang lại cảm giác mới lạ cho họ mà còn giúp họ hiểu thêm về cách sử dụng trà Anh ở thập kỉ 60 thế kỉ XIX
                    </i>

                    <h1 class="text-xl font-bold py-2">Nhiêm vụ</h1>

                    <i>
                    British Tea mang lại hương vị trà Anh đến người thưởng thức. Hơn nữa đây còn là 1 hoạt động xã giao dành cho những người yêu thích nét đẹp văn hóa thanh lịch.
                    </i>

                    <h1 class="text-3xl text-center py-5">Cách thức thưởng trà</h1>

                    <h1 class="text-xl font-bold py-2">Cách thưởng thức trà đúng cách của người Anh</h1>

                    <i>
                    – Trà chỉ rót tới 3/4 tách. Rót trà đầu tiên rồi mới đến các thứ gia vị khác, không dùng đồng thời sữa và chanh. <br>
                    – Thưởng thức 1 ít mỗi loại thực phẩm phục vụ trên bàn (cả kẹo và các món ăn), quét 1 lớp kem lên bánh nướng trước rồi mới đến mứt. Thứ tự thưởng thức: sandwich, scone và cuối cùng là bánh ngọt. Trong đó vì scone là bánh mì nên hãy dùng tay bẻ. <br>
                    – Người Anh không thích bạn nói chuyện khi bạn đang ăn đầy mùi hoặc cắn 1 miếng lớn nên đợi đến khi bạn nuốt hết thức ăn rồi mới nhấp trà. Nguyên tắc là chỉ dùng một thứ một và không dùng đồng thời sữa cùng tranh.
                    </i>

                    <h1 class="text-xl font-bold py-2">Cách thưởng thức trà đúng cách của người Anh</h1>

                    <i>
                    – Không đặt các vật dụng dư ra như chìa khóa, kính, điện thoại trên bàn. Ngoài ra cũng không để muỗng trong tách mà đặt ra đĩa. Không di chuyển đĩa của bạn hơn 1 inch cạnh bàn và cũng không đẩy đĩa bạn ra xa khi bạn ăn xong. <br>
                    – Khăn ăn cần được gấp đôi và đặt trên đùi, với nếp gấp quay về phía mình. Khi muốn tạm thời rời bàn, hãy đặt khăn ăn trên ghế, còn khi kết thúc bữa ăn, hãy đặt khăn ăn trên bàn, phía bên trái đĩa ăn. <br>
                    – Không chĩa ngón út của bạn khi cầm tách trà.
                    </i>
                </div>
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
export default AboutPage;