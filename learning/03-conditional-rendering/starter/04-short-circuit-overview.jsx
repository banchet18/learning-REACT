import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("susan");

  const example = text || name;

  return (
    <div>
      <h4>falsy :{text || name} </h4>
      <h4>falsy : {text && name}</h4>
      <h4>truthy : {text || name}</h4>
      <h4>truthy : {text && name}</h4>
      {example}
    </div>
  );
};

export default ShortCircuitOverview;
