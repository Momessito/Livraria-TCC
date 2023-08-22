function Register() {
    const [idCliente, setIdCliente] = useState("");
    const [cpf, setCpf] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
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
        if (!idCliente || !cpf || !nome || !email || !telefone || !password) {
          console.error("Preencha todos os campos");
          return;
        }
  
        // Validação do CPF (exemplo simples, você pode usar uma biblioteca de validação de CPF)
        const cpfRegex = /^\d{11}$/;
        if (!cpfRegex.test(cpf)) {
          console.error("CPF inválido");
          return;
        }
  
        await auth.createUserWithEmailAndPassword(email, password);
        setLoginSuccess(true);
        localStorage.setItem("userEmail", email);
      } catch (error) {
        console.error("Erro ao cadastrar: ", error);
      }
    };
  
    return (
      <div>
        {/* ... (formulário de login) */}
        {!loginSuccess && (
          <form onSubmit={handleSignUp}>
            <h2>Cadastrar</h2>
            <input
              type="text"
              placeholder="ID Cliente"
              value={idCliente}
              onChange={(e) => setIdCliente(e.target.value)}
            />
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Cadastrar</button>
          </form>
        )}
      </div>
    );
  }
  
  export default Register;