import "../styles/card.scss";
import img from "../assets/fotor_2023-3-27_13_42_42.png";

export const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={img}></img>
      <p className="card-name">
        Fresh and <br /> Health Salad
      </p>
      <div className="card-content">
        <p>60 calories</p>
        <span className="card-content-dot">&#183;</span>
        <p>4 persons</p>
      </div>
      <div className="card-price-holder">
        <p>$2.65</p>
        <div className="card-price-plus">+</div>
      </div>
    </div>
  );
};
