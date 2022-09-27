const AnimalImage = (props) => {
  const ImageUrl = `https://vorstadtcowboy.github.io/images/${props.name.toLowerCase()}.webp`;
    return ( 
        <div className="animal_image">
          <img className="entry" src={ImageUrl} alt={props.name} />
        </div>
     );
}
 
export default AnimalImage;