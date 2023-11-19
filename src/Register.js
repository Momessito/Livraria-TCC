import React, { useState } from "react";
import Firebase, { addUser, auth } from "./BackEnd/Firebase";

function Register() {
  const [idCliente, setIdCliente] = useState("");
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [Perfil, setPerfil] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

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

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Validar os campos (exemplos abaixo)
      if (!idCliente || !cpf || !nome || !email || !Perfil || !password) {
        console.error("Preencha todos os campos");
        return;
      }

      // Validação do CPF (exemplo simples, você pode usar uma biblioteca de validação de CPF)
      const cpfRegex = /^\d{11}$/;
      if (!cpfRegex.test(cpf)) {
        console.error("CPF inválido");
        return;
      }

      await auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential) => { 
            var user = userCredential.user;
            addUser(user.uid,nome,cpf,Perfil);

          });


      setLoginSuccess(true);
      localStorage.setItem("userEmail", email);
    } catch (error) {
      console.error("Erro ao cadastrar: ", error);
    }
  };

    // Função para salvar dados adicionais na Realtime Database
  
  return (
    <div className="App">
      <div className="text-sm breadcrumbs m-10">
        <ul>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              Início
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              Registro
            </a>
          </li>
        </ul>
      </div>
      <div className="hero m-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Entre agora!</h1>
            <p className="py-6">
              Peça para sua instituição entrar em contato para criar uma conta agora mesmo!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob z-index-1" style={{ zIndex: '-1' }}></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{ zIndex: '-1' }}></div>
            <div className="absolute -bottom-32 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" style={{ zIndex: '-1' }}></div>
            <div className="card-body">
            <h2 className="text-5xl font-bold">Cadastrar</h2>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="ID Cliente"
                  value={idCliente}
                  onChange={(e) => setIdCliente(e.target.value)}
                />
                <label className="label">
                <span className="label-text">CPF</span>
                </label>
                <input
                  type="text"
                  placeholder="CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  className="input input-bordered"
                />
                <label className="label">
                <span className="label-text">Nome</span>
                </label>
                <input
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="input input-bordered"
                />
                <label className="label">
                <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                />
                <label className="label">
                <span className="label-text">Perfil</span>
                </label>
                <input
                  type="text"
                  placeholder="Perfil"
                  value={Perfil}
                  onChange={(e) => setPerfil(e.target.value)}
                  className="input input-bordered"
                />
                <label className="label">
                <span className="label-text">Senha</span>
                </label>
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered"
                />
                <div className="form-control mt-6">
                <button type="submit" onClick={handleSignUp} class="btn btn-active btn-primary">Cadastrar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
