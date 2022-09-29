//React
const Tags = (props) => {
    const tagListe = tags.map((tag) => <p>{tag}</p>);
    return ( 
        <div>
            <span className="label">Tags:</span>
            <span className="entry">{tagListe}</span>
        </div>
     );
};
 
export default Tags;