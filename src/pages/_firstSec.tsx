import Link from "next/link";

function FirstSection() {


  return (
    <div className="Title" style={{}}>
      <div className="First">
        <h1> Cadastre seu próximo </h1>
        <h1>Livro Didático</h1>
        <p>O melhor cadastro e controle de livros didáticos para sua instituição de ensino!</p>
        <button>
        <Link href="/login">
        Comece a Utilizar
        </Link>
          </button>
      </div>
      <div className="Second">
        <img src="https://cdn.discordapp.com/attachments/946523460060975157/1099891095313334312/image.png" alt="Imagem" />
      </div>
    </div>
  );
}

export default FirstSection;
