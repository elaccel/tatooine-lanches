import React, { useState } from "react";

const itens = [
    { id: 1, nome: "Vader Burguer", preco: 10.3, imagem: "./imagens/vaderburguer.jpg" },
    { id: 2, nome: "BB8 Burguer", preco: 15.0, imagem: "./imagens/bb8.jpg" },
    { id: 3, nome: "Anakin kids", preco: 7.0, imagem: "./imagens/infantil.jpg" },
    { id: 4, nome: "Millenium Pizza", preco: 9.0, imagem: "./imagens/pizza.jpg" },
    { id: 5, nome: "Estrela Torta", preco: 7.0, imagem: "./imagens/torta.jpg" },
    { id: 6, nome: "Jaba Pestisco", preco: 6.0, imagem: "./imagens/patê.jpg" },
    { id: 7, nome: "Rogue chips", preco: 9.0, imagem: "./imagens/rogue.jpg" },
    { id: 8, nome: "Léa CupCake", preco: 10.0, imagem: "./imagens/lea.jpg" },
    { id: 9, nome: "Jedi Drink", preco: 6.0, imagem: "./imagens/bebidaazul.jpg" },
    { id: 10, nome: "Yoda Suco", preco: 9.0, imagem: "./imagens/sucoyoda.jpg" }
  ];
  
function Cardapio() {
    const [quantidades, setQuantidades] = useState({});

    const atualizarQuantidade = (id, valor) => {
        setQuantidades(prev => ({
            ...prev,
            [id]: parseInt(valor) || 0
        }));
    };

    const totalPorItem = (item) => {
        return (quantidades[item.id] || 0) * item.preco;
    };

    const totalGeral = itens.reduce((total, item) => {
        return total + totalPorItem(item);
    }, 0);

    return (
        <div>
            <h2 className="titulo-Cardapio">Tatooine Lanches</h2>
            <div className="menu-container">
                {itens.map((item, index) => (
                    <div key={index} className="menu-item">
                        <div className="item-info">
                            <h3>{item.nome.split(" ")[0]}<br />{item.nome.split(" ").slice(1).join(" ")}</h3>
                            <p>R$ {item.preco.toFixed(2)}</p>
                            <input
                                type="number"
                                min="0"
                                value={quantidades[item.id] || ''}
                                onChange={e => atualizarQuantidade(item.id, e.target.value)}
                                placeholder="Digite a quantidade"
                            />
                        </div>
                        <img src={item.imagem} className="menu-item-img" alt={item.nome} />
                    </div>
                ))}
            </div>

            <div className="order-summary">
                <h3>Resumo do Pedido</h3>
                {itens.map(item => {
                    const qtd = quantidades[item.id] || 0;
                    if (qtd === 0) return null;

                    return (
                        <p key={item.id}>
                            {qtd}x {item.nome} = R$ {(item.preco * qtd).toFixed(2)}
                        </p>
                    );
                })}
                <hr />
                <p><strong>Total: R$ {totalGeral.toFixed(2)}</strong></p>
            </div>
        </div>
    );
}

export default Cardapio;
