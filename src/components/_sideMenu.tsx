export function SideMenu(){

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
    <div className="SideMenu mobile">
        <h1>On.Books</h1>
        <ul className="mobile">
    <li className="active"> <a>Books</a></li>
    <li> <a>Categorias</a></li>
    <li><a>Wishist</a></li>
    <li> <a>Blog</a></li>
    <li> <a>About Us</a> </li>
</ul>

    </div>
)

}