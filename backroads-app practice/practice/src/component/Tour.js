const Tour = (Links) => {
  const { img, date, h4, text, contry, days, price } = Links;
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{h4}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {contry}
          </p>
          <p>{days}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
