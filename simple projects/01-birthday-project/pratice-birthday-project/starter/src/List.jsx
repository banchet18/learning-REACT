import Person from "./Person";

const List = ({ people }) => {
  return (
    <section className="container2">
      {people.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </section>
  );
};
export default List;
