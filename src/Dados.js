import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./BackEnd/Firebase";

function BasesDados(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function Acess() {
    let input = document.getElementById('InputInst');
    let text = document.getElementById('smallInst');

    if (input && input.value === '1234') {
      window.location.href = '/Instituicao/Etec';
    }else{
      setTimeout(() => {
        window.location.href = '/';

      }, 500);
      text.style.visibility = 'visible'

    }
  }

  const usuario = auth.onAuthStateChanged((user) => {
    if (user) {
      if (user.perfil === 'diretor') {
        setIsLoggedIn(true);
        console.log('logado');
      } else {
        setIsLoggedIn(false);
        console.log('usuário não permitido');

      }
    } else {
      setIsLoggedIn(false);
      console.log('deslogado');

    }
  });

  useEffect(() => {
   
 usuario();
 
 
 
});


    return(<div>
<div class="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bem Vindo as instituições</h1>
    <h1 className="text-lg font-semibold leading-6 texto">essas são as instituições cadastradas no Didacto</h1>
  <div class="relative w-full max-w-lg">
  <div class="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob z-index-1" ></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" ></div>
    <div class="absolute -bottom-32 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" ></div>
    <div class=" relative space-y-4 insitmenu">
      <div class="p-7 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div class="dados flex-1 flex justify-between items-center">
          <div class="text-md font-semibold leading-7 text-gray-900">Etec Albert Einstein</div>
          <label htmlFor="my_modal_6" className="w-24 h-6 rounded-lg bg-blue-400 btn text-white" style={{ backgroundColor: 'rgb(0, 168, 244)' }}>Entrar</label>

<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Digite a senha para continuar!</h3>
    <label className="label">
      <span className="label-text">Digite sua senha</span>
    </label>
    <input type="password" className="input input-bordered input-info w-full" id="InputInst" />
    <small className="smallInst" id="smallInst">Senha Incorreta</small>
    <div className="modal-action">
      <label className="btn text-white" style={{ backgroundColor: 'rgb(0, 168, 244)' }} onClick={Acess}>Entrar</label>
      <label htmlFor="my_modal_6" className="btn">Sair</label>
    </div>
  </div>
</div>
        </div>
      </div>
      <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div class="dados flex-1 flex justify-between items-center">
          <div class="h-4 w-48 bg-gray-400 rounded"></div>
          <div class="w-24 h-6 rounded-lg bg-blue-400" style={{backgroundColor : 'rgb(0, 168, 244)'}}></div>
        </div>
      </div>
      <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div class="dados flex-1 flex justify-between items-center">
          <div class="h-4 w-48 bg-gray-400 rounded"></div>
          <div class="w-24 h-6 rounded-lg bg-blue-400" style={{backgroundColor : 'rgb(0, 168, 244)'}}></div>
        </div>
      </div>
      <button className="btn btn-success w-100 ">Adicionar Instituição</button>

    </div>
  </div>
</div>
    </div>)

}


export default BasesDados;