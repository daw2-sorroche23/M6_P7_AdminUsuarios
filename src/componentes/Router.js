import { Home } from "../vistas/Home";
import { Admin } from "../vistas/Admin";
import { About } from "../vistas/About";

//Primero exportamos las vistas en el componente Router

export const Router ={
    Home:()=>{
        //Seleccionamos la etiqueta main del index.html que es donde inyectaremos el template de la vista home
        document.querySelector('main').innerHTML = Home.template
        Home.script()
    },

    About:()=>{
        //Seleccionamos la etiqueta main del index.html que es donde inyectaremos el template de la vista about
        document.querySelector('main').innerHTML=About.template
        About.script()
    },

    Admin:()=>{
        //Seleccionamos la etiqueta main del index.html que es donde inyectaremos el template de la vista admin
        document.querySelector('main').innerHTML=Admin.template
        Admin.script()
    }
}