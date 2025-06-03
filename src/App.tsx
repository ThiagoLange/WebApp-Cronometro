import Cronometro from './components/Cronometro';
import './App.css'; // Você pode manter ou limpar este arquivo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cronômetro</h1>
      </header>
      <main>
        <Cronometro />
      </main>
    </div>
  );
}

export default App;