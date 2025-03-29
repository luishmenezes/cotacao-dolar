import { useEffect, useState } from "react";

function Cotacao() {
    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
      fetch("http://localhost:8111/info")
        .then((response) => response.json())
        .then((data) => setExchangeRate(data.rates.BRL)) // A chave "rates.BRL" contém a cotação do dólar para real
        .catch((error) => console.error("Erro ao buscar cotação:", error));
    }, []);
  
    return (
      <div>
        <h1>Bem-vindo ao meu site!</h1>
        {exchangeRate ? <p>1 USD = {exchangeRate} BRL</p> : <p>Carregando cotação...</p>}
      </div>
    );
  }


  export default Cotacao;