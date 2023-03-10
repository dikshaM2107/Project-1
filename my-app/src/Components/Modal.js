import { createPortal } from "react-dom";
import "./Css/Modal.css";

const Modal = ({ isOpened, children, onClose }) => {
  if (!isOpened) {
    return null;
  }
  return createPortal(
    <div>
      <div className="overlay"></div>
      <div className="modal">
        <div>
          <span className="close-button" onClick={onClose}>
            X
          </span>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;