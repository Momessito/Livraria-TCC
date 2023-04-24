function Navbar(){

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

    return(
<nav> 
        <div className="esquerda"> 
  <h1>On.Book</h1>
<ul>
    <li className="active"> <a>Books</a></li>
    <li> <a>Categorias</a></li>
    <li><a>Wishist</a></li>
    <li> <a>Blog</a></li>
    <li> <a>About Us</a> </li>
</ul>
</div>

<div className="direita"> 
<div className="input" onMouseOver={abrir} onMouseLeave={sair}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg> 
    <input type="text" id="search" placeholder="" />
  
</div>
<div className="">|</div>
<button>Sing In</button>
</div>
</nav>    )
}

export default Navbar;