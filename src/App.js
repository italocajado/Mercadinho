import React, {useState} from "react";
import logo from "./questao.png";
import './App.css'

function App() {
  const [produtos, setProdutos] = useState([])
  const [nome, setNome] = useState('');
  const [qtde, setQtde] = useState('');
  const [valr, setValr] = useState('');
  const [total, setTotal] = useState(0);

  const adicionarProduto = (e) => {
    e.preventDefault();
    const produto = {
      nome,
      qtde: parseFloat(qtde),
      valr: parseFloat(valr),
    };
    setProdutos([...produtos, produto]);
    setTotal(total + produto.qtde * produto.valr);
    setNome('');
    setQtde('');
    setValr('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>O que eu to levando ?</p>
      </header>
      <form>
        <label>
          Nome do produto:
          <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Digite o produto' required/>
        </label>
        <label>
          Quantidade:
          <input type="number" value={qtde} onChange={(e) => setQtde(e.target.value)} placeholder="Digite a quantidade"></input>
        </label>
        <label>
          Valor R$:
          <input type="number" value={valr} onChange={(e) => setValr(e.target.value)}
          placeholder="Digite o valor "></input>
        </label>
        <button type="button" onClick={adicionarProduto}>Adicionar Produto</button>
      </form>
      <h2>Lista de compras:</h2>
      <p>Total das compras: R$ {total.toFixed(2)}</p>
      <ul>
        {produtos.map((produto, index) =>(
          <li key={index}>
            {produto.nome} - Quantidade: {produto.qtde} - valor: R$ {produto.valr.toFixed(2)}
          </li>
        ))}
      </ul>
      <footer>
        <p>&copy; Desenvolvido por <strong>Italo Cajado</strong>.</p>
      </footer>
    </div>
  );
}

export default App;
