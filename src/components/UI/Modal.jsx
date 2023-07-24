import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
const portalElement = document.getElementById("overlays");

const Backdrop = ({ onClose }) => {
  return <div onClick={onClose} className={styles.overlay}></div>;
};

const ModalOverlay = ({ title, message }) => {
  return (
    <div className={styles.modal}>
      <h3
        style={{
          color: title === "Success" ? "var(--color-primary)" : "red",
        }}
        className={styles.title}
      >
        {title}
      </h3>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message} />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
