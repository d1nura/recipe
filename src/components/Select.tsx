import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";
import "../styles/select.scss";

type select = {
  title: string;
  url: string;
  style?: CSSProperties;
  className?: string;
};

export const Select = ({ title, url, style, className }: select) => {
  return (
    <div className={`select ${className}`} style={style}>
      <div
        className="select-image-holder"
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
      <div>
        <p className="select-title">{title}</p>
        <div className="select-downarrow">
          <p className="select-value">USA</p>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    </div>
  );
};
