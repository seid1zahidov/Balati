import Home from "./views/Home/Home";
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
}

const routeArr = Object.values(routes)


export {
    routes,
    routeArr
}