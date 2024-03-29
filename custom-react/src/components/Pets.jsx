
function Pets({name , animal , breed , location , images}){
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
  <a className="pet">
    <div className="image-container">
      <img src={hero} alt={name} />
    </div>
   
    <div className="info"> 
      <h1>{name}</h1>
     <h2>{`${animal} — ${breed} — ${location}`}</h2>
    </div> 
    </a>
  )
}

export default Pets;