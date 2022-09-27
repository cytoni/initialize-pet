const App () => {
  return (
    <div class="wrapper">
      <h1>Hunde & Katzen</h1>
      <div class="animal">
        <div class="animal_image">
          <img class="entry" src="http://via.placeholder.com/300" alt="animal" />
        </div>

        <div class="animal_title">
          <h2 class="entry">Enrico</h2>
        </div>

        <div class="animal_body">
          <div>
            <span class="label">Tierart:</span>
            <span class="entry">Hund</span>
          </div>

          <div>
            <span class="label">Geschlecht:</span>
            <span class="entry">menschlich</span>
          </div>

          <div>
            <span class="label">Rasse:</span>
            <span class="entry">{Rasse}</span>
          </div>

          <div>
            <span class="label">Alter:</span>
            <span class="entry">12 Jahre</span>
          </div>
        </div>
      </div>

      <div class="controls">
        <button id="pre" disabled>zurück</button>
        <button id="next">vor</button>
      </div>
    </div>
  );
};
export default App;