import "./styles.css";

import { ButtonProps } from "./types";

function Button({
  imgSrc = undefined,
  type = "button",
  name = "Send",
  onClick,
}: ButtonProps) {
  return (
    <button onClick={onClick} type={type} className="button-component">
      {/* Если imgSrc === true, то правая часть после && показывается на странице
      Если imgSrc === false, то правая часть после && скрывается */}
      {imgSrc && <img className="button-img" src={imgSrc} />}
      {!imgSrc && name}
    </button>
  );
}

export default Button;
