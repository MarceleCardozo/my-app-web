import { useEffect, useState } from "react";

function Home() {
  const [message, setMessage] = useState<string>("Carregando...");

  useEffect(() => {
    setMessage("Bem-vindo ao meu projeto bonito!");
  }, []);

  return (
    <div>
      <p>Meu Projeto Bonito</p>
      <p>{message}</p>
    </div>
  );
}

export default Home;
