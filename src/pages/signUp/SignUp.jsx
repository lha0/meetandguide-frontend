import { useNavigate } from "react-router-dom";
import SignUpView from "./SignUpView";

export default function SignUp() {
  const navigate = useNavigate();
  const handleSignUpBtn = () => {
    navigate("/logIn");
  };
  const props = { handleSignUpBtn };
  return <SignUpView {...props} />;
}
