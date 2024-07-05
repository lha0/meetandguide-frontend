import { useNavigate } from "react-router-dom";
import LogInView from "./LogInView";

export default function LogIn() {
  const navigate = useNavigate();
  const handleLogInBtn = () => {
    navigate("/");
  };

  const props = { handleLogInBtn };

  return <LogInView {...props} />;
}
