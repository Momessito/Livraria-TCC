import { useCookies } from "react-cookie";
import { SideMenu } from "./_sideMenu";

function Navbar(){
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);



var istrue : boolean  = true

function abrir(){
var a : any = document.getElementById("search");

a.style.width = "200px";
a.placeholder = "Search Book..."
a.parentNode.style.borderBottom = "1px solid black";
}
function sair(){

var a : any = document.getElementById("search");
a.parentNode.style.borderBottom = "1px solid transparent";

a.style.width = "0px";
a.placeholder = ""
}

function abrirMenu() {
    const burger1 : any = document.querySelector('.burger1');
    const burger2 : any = document.querySelector('.burger2');
    const burger3 : any = document.querySelector('.burger3');
    const SideMenu : any = document.querySelector('.SideMenu');
    const nave : any = document.querySelector('.nav');
    const body : any = document.querySelector('body');
  
    if (istrue === true) {
      SideMenu.style.visibility = 'visible';
      SideMenu.style.opacity = '1';
      burger2.style.width = '25px';
      burger3.style.width = '25px';
      body.classList.add('menu-open'); // adiciona a classe menu-open ao body
      istrue = false;
    } else {
      SideMenu.style.visibility = 'hidden';
      SideMenu.style.opacity = '0';
      burger2.style.width = '20px';
      burger3.style.width = '15px';
      body.classList.remove('menu-open'); // remove a classe menu-open do body
      istrue = true;
    }
  }
  
    return(
<nav className=""> 
    <SideMenu />
        <div className="esquerda"> 
  <h1><a href="/">On.Book</a></h1>
<ul className="desktop">
    <li className="active"> <a href="/">Home</a></li>
    <li> <a>Categorias</a></li>
    <li><a href="/livro">books</a></li>
    <li> <a>Blog</a></li>
    <li> <a>About Us</a> </li>
</ul>


</div>

<div className="direita desktop"> 
<div className="input" onMouseOver={abrir} onMouseLeave={sair}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg> 
    <input type="text" id="search" placeholder="" />
  
</div>
<div className="">|</div>
<button>Sing In</button>

</div>
<div className="Mobile">
        <div className="burger" onClick={abrirMenu}>
            <div className="burger1"></div>
            <div className="burger2"></div>
            <div className="burger3"></div>
        </div>
</div>
</nav>    )
}

export default Navbar;