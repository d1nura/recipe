import icon from "../assets/porridge.png";
import "../styles/button.scss";

type button = {
  title: string;
  className?: string;
};

export const Button = ({ title, className }: button) => {
  return (
    <button className={`button-cart ${className}`}>
      <div className="button-cart-content">
        <img className="button-cart-image" src={icon}></img>
        <p className="button-cart-title">{title}</p>
      </div>
    </button>
  );
};
