import GuideModalView from "./GuideModalView";

export default function GuideModal({ isVisible, guideInfo, onClose }) {
  const props = { isVisible, guideInfo, onClose };
  return <GuideModalView {...props} />;
}
