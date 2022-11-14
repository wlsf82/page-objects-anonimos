import './App.css';
import thirdyDays from './30-dias-sem-pos.png';

function App() {
  return (
    <>
      <header>
        <h1><em>Page Objects</em> Anônimos</h1>
      </header>
      <main>
        <img src={thirdyDays} alt="imagem de um circulo de pessoas sentadas em cadeiras, onde uma delas tem um balão como se estivesse dizendo: 'Fazem 30 dias que não uso Page Objects'"></img>
        <br></br>
        <br></br>
        <p>Você veio do mundo do Selenium e está acostumado a usar <em>Page Objects</em>?</p>
        <p>Te disseram que <em>Page Objects</em> tornariam seus testes mais legíveis e fáceis de manter?</p>
        <p>Te convido a perder esse vício.</p>
        <p>É possível escrever código fácil de ler e dar manutenção, sem a complexidade extra adicionada pelo uso do padrão <em>Page Objects</em>.</p>
        <p>Quer aprender como?</p>
        <p>Assista as lives <a href="https://youtu.be/VYG-gzA1ahY" target="_blank" rel="noreferrer">Por que QAs usam Page Objects com Cypress?</a>, <a href="https://youtu.be/YyU8wHm5cv4" target="_blank" rel="noreferrer">Associação dos Page Objects Anônimos - Perca esse vício</a> e <a href="https://youtu.be/DIbAyVobTD4" target="_blank" rel="noreferrer">Uma alternativa aos Page Objects pros teus Cypress tests</a>, no Canal<a href="https://youtube.com/c/talkingabouttesting" target="_blank" rel="noreferrer"> Talking About Testing</a>, no YouTube.</p>
        <br></br>
        <hr />
        <br></br>
      </main>
      <footer>
      <p>Copyleft 😜 <a href="https://walmyr.dev" target="_blank" rel="noreferrer">Walmyr Filho</a>, 2022</p>
      </footer>
    </>
  );
}

export default App;
