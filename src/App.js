import Title from "./components/Title";

const App = () => {
  return (
    <div className="wrapper">
      {/**Komponente extrahieren Name Title */}
      <Title content="Maus und Henne" />
      <div className="animal">
        <div className="animal_image">
          <img className="entry" src="http://via.placeholder.com/300" alt="animal" />
        </div>

        <div className="animal_title">
          <h2 className="entry">Enrico</h2>
        </div>

        <div className="animal_body">
          <div>
            <span className="label">Tierart:</span>
            <span className="entry">Hund</span>
          </div>

          <div>
            <span className="label">Geschlecht:</span>
            <span className="entry">menschlich</span>
          </div>

          <div>
            <span className="label">Rasse:</span>
            <span className="entry">Leika</span>
          </div>

          <div>
            <span className="label">Alter:</span>
            <span className="entry">12 Jahre</span>
          </div>
        </div>
      </div>

      <div className="controls">
        <button id="pre" disabled>zurück</button>
        <button id="next">vor</button>
      </div>
    </div>
  );
};
export default App;