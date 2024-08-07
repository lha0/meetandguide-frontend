import { useState } from "react";
import InfoView from "./infoView";
import InfoModifyView from "./infoModifyView";

export default function Info() {
  const [pwdCheck, setPwdCheck] = useState(false);

  const handlePwdCheck = () => {
    setPwdCheck(true);
  };

  const props = { handlePwdCheck };
  return pwdCheck ? <InfoModifyView /> : <InfoView {...props} />;
}
