import './App.css';
import ModalDados from './components/Modal-Dados/modal-dados';
import ModalAtivdade from './components/Modal-Atividades/modal-atividades';

function App() {
  return (

    <div className='background-nav'>
      <nav className='nav-aluno'> Area do Aluno </nav>

      <div className="App">

        <div className='background-app'>

          <ModalDados />
          <br />
          <ModalAtivdade />
          <br />

        </div>

      </div>

    </div>


  );
}

export default App;
