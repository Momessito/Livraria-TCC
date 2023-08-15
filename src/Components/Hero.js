import book from "../book.svg"


function Hero() {
    return ( <div className="hero">
    <div className="hero-content flex-col lg:flex-row-reverse hero">
<img src={book} className="imgmain" />

      <div>
        
        <h1 className="text-5xl font-bold tooltip tooltip-open" data-tip="Cadastrar!">Didacto</h1>
        <p className="py-6 ">O cadastro e controle direto da entrada e saida de livros didaticos para sua instituição de ensino publica e privada.</p>
        <button className="btn btn-primary" style={{backgroundColor : '#1A237E',borderColor : '#1A237E'}}>Começar Agora</button>
      </div>
    </div>
  </div> );
}

export default Hero;