import { Link } from "react-router-dom";
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
      <div className=" texto-aparecer">
      <img src={book} className="imgmain z-0" />

      </div>

      <div>
        
      <div className="h1 texto-aparecer">Didacto</div>
        <p className="py-6 font-semibold texto-aparecer">O cadastro e controle direto da entrada e saida de livros didaticos para sua instituição de ensino publica e privada.</p>
        <Link to={'/BasesDados'} className="btn texto-aparecer text-white" style={{ backgroundColor: 'rgb(0, 168, 244)' }}>Cadastrar sua Instituição</Link>
      </div>
    </div>
  </div> );
}

export default Hero;