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

function App() {
  return (
    <div className="App">
      <div className="StartImage">
        <div className="StartContent">
          <NavbarMain />

          <Hero />

          <div className="MainPage">
            <h1>Tailwind CSS-Based Framework</h1>
            <br />
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h4>
          </div>

        </div>
      </div>


    </div>
  );
}

export default App;
