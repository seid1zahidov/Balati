import Home from "./views/Home/Home";
import Secont from "./views/secont/Secont";
import text from './text.json'
const routeItem = (title , path , component) => {
    return{
        title, 
        path,
        component
    }
}

const routes = {
    home: routeItem(text.home, '/' , Home),
    secont: routeItem(text.secont, '/secont' , Secont)
}

const routeArr = Object.values(routes)


export {
    routes,
    routeArr
}