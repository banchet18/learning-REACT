const Person = (person) => {
  const { image, name, age } = person;

  return (
    <article className="list">
      <img src={image} alt={name} className="img" />
      <div>
        <h2>{name}</h2>
        <h3>{age}</h3>
      </div>
    </article>
  );
};
export default Person;
