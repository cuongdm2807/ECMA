import AboutPage from "./page/about";
import HomePage from "./page/Home";
import ProductPage from "./page/product";
import ProductDetailPage from "./page/product-detail";
import NewPage from "./page/news";
import DashBoards from "./page/admin/dashboard";
import { useParams, $ } from "./utils";
import Error404Page from './page/404'
import ProductAdmin from "./page/admin/product/index";
import categoryAdminPage from "./page/admin/category";
import addCategoryPage from "./page/admin/category/add";
import Header from "./components/header";
import CategoryPage from "./page/categoryPage";
import ProductAddPage from "./page/admin/product/productAddPage";
import ProductEditPage from "./page/admin/product/edit";
import shopByCategory from "./page/shopByCategory";
import CategotyEditPage from "./page/admin/category/edit";
import LoginPage from "./page/login";
import RegisPage from "./page/register";


const routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/product": ProductPage,
  "/products/:id": ProductDetailPage,
  "/categories/:id": CategoryPage,
  "/news": NewPage,
  "/admin": DashBoards,
  "/productadmin": ProductAdmin,
  "/categoryadmin": categoryAdminPage,
  "/addcategory": addCategoryPage,
  "/addproduct": ProductAddPage,
  "/editproduct/:id": ProductEditPage,
  "/shop/:id":shopByCategory,
  "/editcategory/:id": CategotyEditPage,
  "/signin": LoginPage,
  "/signup": RegisPage,
};
const router = async () => {
  const request = useParams();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Page;
  $("#header").innerHTML = await Header.render();
  $("#header").innerHTML = await Header.afterRender();
  const main = $("#root");
  // .innerHTML = await pageXOffset.render();
  main.innerHTML = await screen.render();

  await screen.afterRender();

  // const main = document.querySelector('#root');
  // main.innerHTML =  Home.render();
};
window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);
