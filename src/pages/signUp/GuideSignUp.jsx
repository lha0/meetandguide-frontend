import { useNavigate } from "react-router-dom";
import GuideSignUpView from "./GuideSignUpView";

export default function GuideSignUp() {
  const navigate = useNavigate();
  const handleSignUpBtn = () => {
    navigate("/logIn");
  };
  const props = { handleSignUpBtn };
  return <GuideSignUpView {...props} />;
}
