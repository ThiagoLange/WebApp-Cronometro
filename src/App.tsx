import Cronometro from './components/Cronometro';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cronômetro</h1>
      </header>
      <main>
        <Cronometro />
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 Thiago. Feito com React e TypeScript.</p>
      </footer>
    </div>
  );
}

export default App;