import ageConverter from "../ageConverter";

const Age = ({birthday}) => {
    const age = ageConverter(birthday);
    return (
        <div>
            <span className="label">Alter:</span>
            <span className="entry">{age}</span>
          </div>
    )
};
export default Age;