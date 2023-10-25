import { tours } from "../data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {tours.map((Links) => {
          return <Tour {...Links} key={Links.id} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
