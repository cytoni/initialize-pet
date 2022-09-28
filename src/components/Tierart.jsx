const Tierart = (props) => {
    return ( 
        <div className="Tierart">
        <span className="label">Tierart:</span>
        <span className="entry">{props.art}</span>
        </div>
     );
};
 
export default Tierart;