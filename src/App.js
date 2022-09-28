import Title from "./components/Title";
import Animal from "./components/Animal";
import animalData from "./animalData";
import { useState, useEffect } from "react";

const App = () => {
  console.log(animalData[0]);
  
//Use State benutzen
  const [counter, setCounter] = useState(0);
  let [disVor, setDisVor] = useState(false);
  let [disZuruk, setDisZuruk] = useState(true);

//UseEffect benutzen (bei Side Effect)
useEffect(() => {
  document.title = `Hilf ${animalData[counter].species} ${animalData[counter].name}`;
}, [counter]);

  //let counter = 0;
  function handleNext() {
    if (counter < animalData.length - 1) {
      setCounter(counter + 1);
      setDisZuruk(false);
    }
    if (counter +1 === animalData.length - 1) {
      setDisZuruk(false);
      setDisVor(true);
    }
}

function handleBack() {
   if (counter > 0) {
    setDisVor(false);
    setCounter(counter - 1);
      }
      if (counter - 1 === 0) {
        setDisZuruk(true);

      }
//  setCounter(counter - 1);
}

  return (
    <div className="wrapper">
      {/**Komponente extrahieren Name Title */}
      <Title content="Hunde und Katzen" age={15} />

      {/**Animal */}
      <Animal tier={animalData[counter]}/>

      <div className="controls">
        <button id="pre" onClick={handleBack} disabled={disZuruk}>zurück</button>
        <button id="next" onClick={handleNext} disabled={disVor}>vor {counter}</button>
      </div>
    </div>
  );
};
export default App;