const Service = ({ icon, h4, text }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{h4}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};
export default Service;
