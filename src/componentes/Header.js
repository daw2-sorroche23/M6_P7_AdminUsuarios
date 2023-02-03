import { Home } from "../vistas/Home";
import { Admin } from "../vistas/Admin";
import { About } from "../vistas/About";
import { Router } from "./Router";

export const Header = {
    //Hacemos un tamplate que contega el codigo html para hacer un menu que tenga las vistas que hemos creado [HOME,ABOUT,MAIN]
    templae:`<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link " href="#" id="home">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="about">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="admin">ADMIN</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>`,
     //Ya con el menu echo selecionamos cada apartado por su id y le añadimos un evento que al hacer click cargue el templeta del router
    script:()=>{
        document.querySelector('#home').addEventListener('click',()=>{
            Router.Home()
        });


        document.querySelector('#about').addEventListener('click',()=>{
            Router.About()
        });

        document.querySelector('#admin').addEventListener('click',()=>{
            Router.Admin()
        });
    }




}