import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";
import axios from "axios";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(url);
        // if (!response.ok) {
        //   setIsError(true);
        //   setIsLoading(false);
        //   return;
        // }
        // const user = await response.json();
        // setUser(user);
        // console.log(user);
        const response = await axios.get(url);
        setUser(response.data);
      } catch (error) {
        setIsError(true);

        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }
  if (isError) {
    return <h2>There is some error.....</h2>;
  }

  const { avatar_url, bio, company, name } = user;
  return (
    <div>
      <h2>Fetch Data</h2>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt=""
      />
      <h2>{name}</h2>
      <h4>{company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
