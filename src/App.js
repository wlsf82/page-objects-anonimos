import './App.css';
import nDays from './n-dias-sem-pos.png';

function App() {
  return (
    <>
      <header>
        <h1>APOA - Associação dos <em>Page Objects</em> Anônimos</h1>
      </header>
      <main>
        <img src={nDays} alt="imagem de um circulo de pessoas sentadas em cadeiras, onde uma delas tem um balão como se estivesse dizendo: 'Fazem 30 dias que não uso Page Objects'"></img>
        <br></br>
        <br></br>
        <p>Você veio do mundo do Selenium e está acostumado a usar <em>Page Objects</em>?</p>
        <p>Te disseram que <em>Page Objects</em> tornariam os testes mais legíveis e fáceis de manter?</p>
        <p>Te convido a perder esse vício.</p>
        <p>É possível escrever código fácil de ler e dar manutenção, sem a complexidade extra adicionada pelo uso do padrão <em>Page Objects</em>.</p>
        <p>Quer aprender como?</p>
        <p>Assista as lives <a href="https://youtube.com/live/rRRID2Z4QpY" target="_blank" rel="noreferrer">Refatoração de um projeto de Cypress com TypeScript</a>, <a href="https://www.youtube.com/live/vpicU59iyPM?feature=share" target="_blank" rel="noreferrer">Page Objects simples vs complexo com Cypress</a>, <a href="https://www.youtube.com/live/nOLgmfxw6_o?si=QxTQBiTngv5X64v0" target="_blank" rel="noreferrer">Más práticas em automação de testes com Cypress</a>, <a href="https://youtube.com/live/XuAbhY0dKGM?feature=share" target="_blank" rel="noreferrer">Page Objects, Cucumber e muito mais</a>, <a href="https://youtu.be/VYG-gzA1ahY" target="_blank" rel="noreferrer">Por que QAs usam Page Objects com Cypress?</a>, <a href="https://youtu.be/YyU8wHm5cv4" target="_blank" rel="noreferrer">Associação dos Page Objects Anônimos - Perca esse vício</a> e <a href="https://youtu.be/DIbAyVobTD4" target="_blank" rel="noreferrer">Uma alternativa aos Page Objects pros teus Cypress tests</a>, no Canal<a href="https://youtube.com/c/talkingabouttesting" target="_blank" rel="noreferrer"> Talking About Testing</a>, no YouTube.</p>
        <p>Por fim, conheça o projeto <a href="https://github.com/wlsf82/gitlab-cypress" target="_blank" rel="noreferrer"><code>gitlab-cypress</code></a>, o qual NÃO faz uso do padrão <em>Page Objects</em>, e ainda assim, preza por questões de legibilidade, manutenabilidade, escalabilidade, etc.</p>
        <br></br>
        <hr />
        <br></br>
      </main>
      <footer>
      <p>Copyleft 😜 <a href="https://walmyr.dev" target="_blank" rel="noreferrer">Walmyr</a>, 2026</p>
      </footer>
    </>
  );
}

export default App;
