import Title from "./components/Title";
import Animal from "./components/Animal";
import animalData from "./animalData";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  console.log(animalData[0]);
  
//Use State benutzen
  const [counter, setCounter] = useState(0);
  let [disVor, setDisVor] = useState(false);
  let [disZuruk, setDisZuruk] = useState(true);

//UseEffect benutzen (bei Side Effect)
useEffect(() => {
  document.title = `Hilf ${animalData[counter].species} ${animalData[counter].name}`;
/**Holen uns die Daten von unserer REST Api
 * 
 */
 axios.get("http://localhost:3004/animals")
 .then ((response) => console.log(response));
}, [counter]);



//Eventhandler-function
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
//Alle Tiere
const alleTiere = animalData.map((tier) => <Animal tier={tier} />);
//Alle Katzen
//const alleKatzen = animalData.map((species) => <Animal art={species} />);

  return (
    <div>
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
    {//Hier eine Sektion mit allen Tieren
    <section>
      <h2>Alle Tiere</h2>
      <div class="row">
      {alleTiere}
      </div>
    </section>
    }
        {//Hier eine Sektion mit allen Tieren
    <section>
    <h2>Alle Katzen</h2>
    <div class="row">
    {}
    </div>
  </section>
  }
    </div>
  );
};
export default App;