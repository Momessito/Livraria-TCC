import "./App.css";
import MainHomePage from "./Components/MainHomePage";
import Hero from "./Components/Hero";

import Alert from "./Components/Alert";

function Home() {
  return (
    <div className="App">
      <div className="StartImage">
        <div className="StartContent">
          <Hero />
        </div>
      </div>
      <MainHomePage />
      <Alert text='Bem vindo ao Didacto!' />
    </div>
  );
}

export default Home;
