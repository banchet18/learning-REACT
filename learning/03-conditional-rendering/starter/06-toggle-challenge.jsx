import { useEffect, useState } from "react";

const ToggleChallenge = () => {
  const [click, setClick] = useState(false);

  // const invokeSomeComponent = () => {
  //   if (click) {
  //     setClick(false);
  //     return;
  //   }
  //   setClick(true);
  // };

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setClick(!click);
        }}
      >
        Toggle
      </button>
      {click && <SomeComponent />}
    </div>
  );
};
const SomeComponent = () => {
  return <div>SomeComponent</div>;
};

export default ToggleChallenge;
