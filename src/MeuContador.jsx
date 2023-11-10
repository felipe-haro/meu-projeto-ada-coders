import { useState } from "react";
import styles from './button.module.css';

export default function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div className="container">
      <h1>Meu Contador Estitizado</h1>
      <h3>{contador}</h3>
      <button className={styles.botaoContador} onClick={aumentar}>Aumentar contagem</button>
    </div>
  );
}
