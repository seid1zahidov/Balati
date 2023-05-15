import Home from "./views/Home/Home";
import text from './text.json'
import Product from "./views/Product/Product";
import SingleProduct from "./views/ProductsDetails/index.tsx"
const routeItem = (title , path , component) => {
    return{
        title, 
        path,
        component
    }
}

const routes = {
    home: routeItem(text.home, '/' , Home),
    Product: routeItem(text.Product, '/Product' , Product),
    SingleProduct: routeItem(text.Productdetails, '/SingleProduct' , SingleProduct),
}

const routeArr = Object.values(routes)


export {
    routes,
    routeArr
}