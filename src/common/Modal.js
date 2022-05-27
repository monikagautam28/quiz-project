import React from "react";


const Modal = (props) => {
  return (
    <div className="popup">
      <div className="popup_box">{props.children}</div>
    </div>
  );
};

export default Modal;