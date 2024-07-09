import { useNavigate } from "react-router-dom";
import UserSignUpView from "./UserSignUpView";

export default function UserSignUp() {
  const navigate = useNavigate();
  const handleSignUpBtn = () => {
    navigate("/logIn");
  };
  const props = { handleSignUpBtn };
  return <UserSignUpView {...props} />;
}
