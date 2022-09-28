import AnimalImage from "./AnimalImage";
import AnimalTitle from "./AnimalTitle";
import Tierart from "./Tierart";
import Geschlecht from "./Geschlecht";
import Rasse from "./Rasse.jsx";
import Age from "./Age.jsx";

const Animal = ({tier}) => {
    console.log(tier);
    const {name, species, sex, race, birthday} = tier;
    return (
        <div className="animal">
        <AnimalImage name={name} />
        {/**Animal Title */}
        <AnimalTitle title={name} />

        <div className="animal_body">
            {/**Tierart */}
            <Tierart art={species} />
             {/**Geschlecht */}
             <Geschlecht sex={sex} />
             {/**Rasse */}
             <Rasse race={race} />
             {/**Age */}
             <Age birthday={birthday} />
        </div>
      </div>);
}

export default Animal;