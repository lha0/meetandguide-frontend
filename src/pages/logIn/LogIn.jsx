import { useNavigate } from "react-router-dom";
import LogInView from "./LogInView";
import ChooseMemberView from "./ChooseMemberView";
import { useState } from "react";

export default function LogIn() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const handleLogInBtn = () => {
    navigate("/");
  };

  const handleSignUpBtn = () => {
    setModal(true);
  };

  const props = { handleLogInBtn, handleSignUpBtn };

  return modal == true ? <ChooseMemberView /> : <LogInView {...props} />;
}
