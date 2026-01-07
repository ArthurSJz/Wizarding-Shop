import { useEffect } from "react";

function Toast({ message, type = "success", duration = 3000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!message) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        minWidth: "200px",
        padding: "10px 20px",
        backgroundColor: type === "success" ? "#1B5E3C" : "#7F1D1D",
        color: "#fff",
        borderRadius: "5px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: "transparent",
          border: "none",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
          marginLeft: "10px",
        }}
      >
        ✖
      </button>
    </div>
  );
}
export default Toast;
