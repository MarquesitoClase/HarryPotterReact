function HarryPotterCard({ name, house, image }) {
  const houseClass = house ? house.toLowerCase() : "no-house";
  return (
    <article className={`hp-card ${houseClass}`}>
      <img
        src={image}
        alt={
          image
            ? "Imagen de " + name
            : "Imagen de " + name + " no disponible en el API"
        }
      />
      <h3>{name}</h3>
      <p>{house}</p>
    </article>
  );
}

export default HarryPotterCard;