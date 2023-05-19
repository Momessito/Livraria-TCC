import React from "react";
import Navbar from "@/components/_navbar";
import { Blur } from "@/components/_black";

function Login(){

return(
    <div className="Login">
      <Navbar />
      <Blur />
      <div className="container">
  <div className="left">
    <div className="header">
      <h2 className="animation a1">Bem vindo</h2>
      <h4 className="animation a2">Logue-se com seu email e senha para continuar</h4>
    </div>
    <div className="form">
      <input type="email" className="form-field animation a3" placeholder="Email" />
      <input type="password" className="form-field animation a4" placeholder="Senha"/>
      <p className="animation a5"><a href="#">Esqueci Minha senha</a></p>
      <button className="animation a6">Entrar</button>
    </div>
  </div>
  <div className="right"></div>
</div>

    </div>
)

}

export default Login;