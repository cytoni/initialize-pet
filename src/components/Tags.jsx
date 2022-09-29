//React
const Tags = (prop) => {
    const Liste = prop.tags.map((tag, index) => <p key={index}>{tag}</p>);
    return ( 
        <div>
            <span className="label">Tags:</span>
            <span className="entry">{Liste}</span>
        </div>
     );
};
 
export default Tags;