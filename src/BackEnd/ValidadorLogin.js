import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

export default function ValidadorLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        console.log('logado');
      } else {
        setIsLoggedIn(false);
        navigate("/");

        console.log('deslogado');
      }
    });

    return () => unsubscribe();
  }, []);

  if (!isLoggedIn) {
    // Redireciona para a página home
    navigate("/");
    // Retorne null se quiser evitar a renderização do restante do componente
    return null;
  }

  // Restante do seu componente
  return (
    <div>
      {/* Se precisar renderizar algo com base no estado de login, pode fazer isso aqui */}
    </div>
  );
}
