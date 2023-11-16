import "./App.css";
import MainHomePage from "./Components/MainHomePage";
import Hero from "./Components/Hero";
import Footer from './Components/Footer'
import Alert from "./Components/Alert";
import Team from "./Components/Team";
import TableExample from "./Components/TableExample";

function Home() {
  return (
    <div className="App">
      <div className="StartImage">
        <div className="StartContent">
          <Hero />
        </div>
      </div>

      <MainHomePage />
      <TableExample />

      <Team />
      <Footer />
      <Alert text='Bem vindo ao Didacto!' />
    </div>
  );
}

export default Home;
