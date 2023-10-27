import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      <h2>{text || "default value"}</h2>
      {user && <SomeComponent user={user} />}
      <h2>Ternary Operator</h2>
      <button type="button" className="btn">
        {isEditing ? "edit" : "add"}
      </button>
      {user ? (
        <div>
          <h2> hello {user.name}</h2>
        </div>
      ) : (
        <div>
          <h2> please Login </h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ user }) => {
  const { name } = user;
  return (
    <div>
      <h2>whatever</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
