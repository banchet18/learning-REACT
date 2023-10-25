import { service } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {service.map((Links) => {
          return <Service {...Links} key={Links.id} />;
        })}
      </div>
    </section>
  );
};
export default Services;
