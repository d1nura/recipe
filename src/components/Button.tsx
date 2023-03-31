import icon from "../assets/porridge.png";
import "../styles/button.scss";

type button = {
  title: string;
};

export const Button = ({ title }: button) => {
  return (
    <button className="button-cart">
      <div className="button-cart-content">
        <img className="button-cart-image" src={icon}></img>
        {title}
      </div>
    </button>
  );
};
