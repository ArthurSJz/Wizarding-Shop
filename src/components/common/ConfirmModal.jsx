import "../../App.css";

function ConfirmModal({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;

  return (
    <div className="modal-box">
      <div className="modal-content">
        <p>{message}</p>
        <div className="buttons">
          <button className="btn btn-primary" onClick={onConfirm}>
            Yes
          </button>
          <button className="btn btn-danger" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
