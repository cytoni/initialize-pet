const Geschlecht = (props) => {
    return ( 
    <div>
        <span className="label">Geschlecht:</span>
        <span className="entry">{props.sex}</span>
      </div> );
};
 
export default Geschlecht;