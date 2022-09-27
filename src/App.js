import Title from "./components/Title";
import Animal from "./Animal/components/Animal";

const App = () => {
  return (
    <div className="wrapper">
      {/**Komponente extrahieren Name Title */}
      <Title content="Maus und Henne" age={15} />
      <Animal />

      <div className="controls">
        <button id="pre" disabled>zurück</button>
        <button id="next">vor</button>
      </div>
    </div>
  );
};
export default App;