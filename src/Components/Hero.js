import book from "../imgs/main.png"
import { scroller } from 'react-scroll';


function Hero() {

  const scrollToMainHomePage = () => {
    scroller.scrollTo('mainHomePage', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

    return ( <div className="hero inicial">
    <div className="hero-content flex-col lg:flex-row-reverse hero">
<img src={book} className="imgmain z-0" />

      <div>
        
      <div className="h1">Didacto</div>
        <p className="py-6 font-semibold">O cadastro e controle direto da entrada e saida de livros didaticos para sua instituição de ensino publica e privada.</p>
        <button className="btn"onClick={scrollToMainHomePage}>Começar Agora</button>
      </div>
    </div>
  </div> );
}

export default Hero;