const SideBarAdmin = {
    render(){
        return /*html*/ `
        <aside class="relative bg-main h-screen w-1/5 hidden sm:block shadow-xl">
        <nav class="text-white bg-main text-base font-semibold pt-3">
            <a href="#/" class="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                <i class="fas fa-tachometer-alt mr-3"></i>
               Home
            </a>
            <a href="/#/productadmin" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i class="fas fa-sticky-note mr-3"></i>
                Product
            </a>
            <a href="/#/categoryadmin" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i class="fas fa-sticky-note mr-3"></i>
            Category
        </a>
        </nav>
        <a href="#" class="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
            <i class="fas fa-arrow-circle-up mr-3"></i>
            
        </a>
    </aside>
        `
    }
}
export default SideBarAdmin;