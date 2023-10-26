import { useEffect, useState } from "react";
import List from "./components/List";

const url = "https://api.github.com/users";

const Fetchdata = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const dataFetching = async () => {
      const resposne = await fetch(url);
      const users = await resposne.json();
      setUsers(users);
    };
    return dataFetching;
  }, []);

  return (
    <section>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          return <List user={user} key={user.id} />;
        })}
      </ul>
    </section>
  );
};
export default Fetchdata;
