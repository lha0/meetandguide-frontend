import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center font-pre">
      <div className="relative max-w-[800px] w-[80%] bg-white p-12 rounded-2xl shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-[-8px] right-[-30px] mt-2 mr-2 text-gray-700"
        >
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
