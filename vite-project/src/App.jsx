import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import Categorias from './components/Categorias/Categorias'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <br />
      <header className="container-fluid">
        <NavBar />
      </header>
      <main>
        <Categorias />
        <ItemListContainer greeting='Rafael'/>
      </main>
      <footer></footer>
    </div>

  );
}
export default App