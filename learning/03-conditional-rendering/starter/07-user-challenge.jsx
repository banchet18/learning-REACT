import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(false);

  const login = () => {
    setUser({ name: "john" });
  };
  const logout = () => {
    setUser(false);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>hello {user.name}</h2>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
