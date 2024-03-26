const Modal = (props) => {
  const {isOpen, setOpenModal, modalTitle, modalVideoURL } = props;

  const closeTrailerModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={`modal ${isOpen && "open-modal"}`}>
      <div className="modal__header">
        <h2 className="modal__header__h2">{modalTitle}</h2>
        <div
          className="close-modal-btn"
          style={{ width: 40, height: 40, cursor: "pointer" }}
          onClick={closeTrailerModal}
        >
          <i className="fa-solid fa-times"></i>
        </div>
      </div>
      <iframe
        width="100%"
        height="100%"
        src={modalVideoURL}
        className="youtube-frame"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Modal;
