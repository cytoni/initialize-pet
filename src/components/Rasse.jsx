const Rasse = (props) => {
    return ( 
    <div>
        <span className="label">Geschlecht:</span>
        <span className="entry">{props.race}</span>
      </div> );
};
 
export default Rasse;