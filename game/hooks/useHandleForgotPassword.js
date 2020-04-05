import { useState } from "react";

export default function useHandleForgotPassword() {
  const [toggle, setToggle] = useState(false);
  const handleForgotPassword = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  return [toggle, handleForgotPassword];
}
