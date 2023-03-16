import './App.css';
import nDays from './n-dias-sem-pos.png';

function App() {
  return (
    <>
      <header>
        <h1>Associação dos <em>Page Objects</em> Anônimos</h1>
      </header>
      <main>
        <img src={nDays} alt="imagem de um circulo de pessoas sentadas em cadeiras, onde uma delas tem um balão como se estivesse dizendo: 'Fazem 30 dias que não uso Page Objects'"></img>
        <br></br>
        <br></br>
        <p>Você veio do mundo do Selenium e está acostumado a usar <em>Page Objects</em>?</p>
        <p>Te disseram que <em>Page Objects</em> tornariam seus testes mais legíveis e fáceis de manter?</p>
        <p>Te convido a perder esse vício.</p>
        <p>É possível escrever código fácil de ler e dar manutenção, sem a complexidade extra adicionada pelo uso do padrão <em>Page Objects</em>.</p>
        <p>Quer aprender como?</p>
        <p>Assista as lives <a href="https://youtu.be/VYG-gzA1ahY" target="_blank" rel="noreferrer">Por que QAs usam Page Objects com Cypress?</a>, <a href="https://youtu.be/YyU8wHm5cv4" target="_blank" rel="noreferrer">Associação dos Page Objects Anônimos - Perca esse vício</a> e <a href="https://youtu.be/DIbAyVobTD4" target="_blank" rel="noreferrer">Uma alternativa aos Page Objects pros teus Cypress tests</a>, no Canal<a href="https://youtube.com/c/talkingabouttesting" target="_blank" rel="noreferrer"> Talking About Testing</a>, no YouTube.</p>
        <p>Por fim, conheça o projeto <a href="https://github.com/wlsf82/gitlab-cypress" target="_blank" rel="noreferrer"><code>gitlab-cypress</code></a>, o qual não faz uso do padrão <em>Page Objects</em>, e ainda assim, preza por questões de legibilidade, manutenabilidade, escalabilidade, etc.</p>
        <br></br>
        <hr />
        <br></br>
      </main>
      <footer>
      <p>Copyleft 😜 <a href="https://walmyr.dev" target="_blank" rel="noreferrer">Walmyr Filho</a>, 2023</p>
      </footer>
    </>
  );
}

export default App;
