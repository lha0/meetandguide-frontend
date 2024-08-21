import CancelMatchModalView from "./CancelMatchModalView";

export default function CancelMatchModal({ isVisible, onClose }) {
  const props = {
    isVisible,
    onClose,
  };
  return <CancelMatchModalView {...props} />;
}
