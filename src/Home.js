import "./App.css";
import NavbarMain from "./Components/Navbar";
import BotaoPrimario from "./Components/BotaoPrimario";
import BotaoSucesso from "./Components/BotaoSucesso";
import BotaoAviso from "./Components/BotaoAviso";
import BotaoErro from "./Components/BotaoErro";
import InputPadrão from "./Components/InputPrimario";
import Hero from "./Components/Hero";
import book from "./book.svg"
import AuthComponent from "./Components/authComponet";
import Alert from "./Components/Alert";

function Home() {
  return (
    <div className="App">
      <div className="StartImage">
        <div className="StartContent">

          <Hero />

          <div className="MainPage">
            <h1>Tailwind CSS-Based Framework</h1>
            <br />
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h4>

            <div className="collapse collapse-arrow bg-base-200  mt-10">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
          </div>

        </div>
      </div>

      <Alert text='Bem vindo ao Didacto!' />
    </div>
  );
}

export default Home;
