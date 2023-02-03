import './style.css'
import { Header } from './componentes/Header'

//Ya con todo escho inyectamos nuestro menu en el componente Header en la etiqueta header del index.html

document.querySelector('header').innerHTML = Header.templae
Header.script()





