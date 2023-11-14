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
import { useState } from "react";
import { auth } from "./BackEnd/Firebase"; // Substitua pelo caminho correto para o arquivo Firebase.js


function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log("Login bem-sucedido!");
      localStorage.setItem("userEmail", email);
    } catch (error) {
      console.error("Erro ao fazer login: ", error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
      console.log("Login com Google bem-sucedido!");
    } catch (error) {
      console.error("Erro ao fazer login com o Google: ", error);
    }
  };

  return (
    <div className="App">
      <div className="text-sm breadcrumbs m-10">
  <ul>
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Inicio
      </a>
    </li> 
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Login
      </a>
    </li> 
  </ul>
</div>
      <div className="hero m-0">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Entre agora!</h1>
      <p className="py-6">Peça para sua instituição entrar em contato para criar uma conta agora mesmo!</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
    <div class="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob z-index-1" style={{zIndex : '-1'}}></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{zIndex : '-1'}}></div>
    <div class="absolute -bottom-32 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" style={{zIndex : '-1'}}></div>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered"           value={email}
          onChange={(e) => setEmail(e.target.value)}
 />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"  value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
