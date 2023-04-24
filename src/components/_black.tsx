export function Blur(){
    function sair(){
        
        var a : any = document.getElementById("search");
        a.parentNode.style.borderBottom = "1px solid transparent";
        var black : any = document.querySelector(".blur")

        a.style.width = "0px";
        a.placeholder = ""
        black.style.opacity = '0';
        black.style.zindex = '-10';

        }
    return (
        <div className="blur" onClick={sair}>
        </div>
    )
}