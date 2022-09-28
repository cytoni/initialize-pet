import Title from "./components/Title";
import Animal from "./components/Animal";
import animalData from "./animalData";
import { useState } from "react";

const App = () => {
  console.log(animalData[0]);
  
//Use State benutzen
  const [counter, setCounter] = useState(0);
  let [disabled, setDisabled] = useState(false);

  //let counter = 0;
  function handleNext() {
    if (counter < animalData.length - 1) {
  setCounter(counter + 1);
    }
    else if (counter == animalData.length) {
      setDisabled(true);
    }
}

function handleBack() {
  setCounter(counter - 1);
}

  return (
    <div className="wrapper">
      {/**Komponente extrahieren Name Title */}
      <Title content="Hunde und Katzen" age={15} />

      {/**Animal */}
      <Animal tier={animalData[counter]}/>

      <div className="controls">
        <button id="pre" onClick={handleBack} disabled={disabled}>zurück</button>
        <button id="next" onClick={handleNext} disabled={disabled}>vor {counter}</button>
      </div>
    </div>
  );
};
export default App;