import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center font-pre">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-[150px] right-[480px] mt-2 mr-2 text-gray-700"
        >
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
