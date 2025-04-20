import './App.css';
import './styles.css';
import Cardapio from "./componentes/Cardapio"; // ajuste para "componentes" se for a pasta correta

function App() {
  return (
    <>
      {/* Ícones das redes sociais */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/elainecelestino/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/elaccel" target="_blank" rel="noreferrer">
          <i className="fas fa-globe"></i>
        </a>
        <a href="https://github.com/elaccel" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/elaine__cel/profilecard/?igsh=ajRwMmtpaG43b2Vl" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:elacelestinocontato@gmail.com?subject=Fale%20Conosco">
          <i className="far fa-envelope"></i>
        </a>
        <a href="https://wa.me/5521999121451" target="_blank" rel="noreferrer" className="whatsapp-link">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

     
     

      {/* Cardápio + Resumo do Pedido */}
      <Cardapio />

      {/* Rodapé */}
      <footer>
        Desenvolvido por <a href="https://github.com/elaccel" target="_blank" rel="noreferrer">Elacel</a>,
        no Curso de Programador FrontEnd do Senai (2025) - Todos os direitos reservados
      </footer>
    </>
  );
}

export default App;
