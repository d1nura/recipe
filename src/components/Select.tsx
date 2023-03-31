import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";
import "../styles/select.scss";

type select = {
  title: string;
  url: string;
  style?: CSSProperties;
};

export const Select = ({ title, url, style }: select) => {
  return (
    <div className="select" style={style}>
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
