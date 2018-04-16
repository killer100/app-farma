
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

let menuList = [
    //{ title: 'Home', component: HomePage },
    //{ title: 'List', component: ListPage },
    { title: 'Buscar Producto', component: 'product-list-page' },
    { title: 'Buscar Establecimiento', component: 'establishment-list-page' },
    { title: 'Iniciar sesión', component: 'login-page' },
    { title: 'Enviar alerta', component: 'alert-register-page' }
]

let rootPage = 'product-list-page';


export { menuList, rootPage };