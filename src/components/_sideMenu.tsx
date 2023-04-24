export function SideMenu(){

    function abrir(){
        var a : any = document.getElementById("search");
        var black : any = document.querySelector(".blur")
        
        a.style.width = "200px";
        black.style.opacity = '1';
        black.style.zindex = '10';
        a.placeholder = "Search Book..."
        a.parentNode.style.borderBottom = "1px solid black";
        }
        function sair(){
            var black : any = document.querySelector(".blur")

        var a : any = document.getElementById("search");
        a.parentNode.style.borderBottom = "1px solid transparent";
        black.style.opacity = '0';
        black.style.zindex = '-10';
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