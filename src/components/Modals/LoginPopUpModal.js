import React from "react";
import { Modal } from "react-responsive-modal";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AuthPopForm from "../forms/AuthPopUpForm";
import { UserLogin } from "../../helper/UserAuth";

function LoginPopUpModal({ loginHandle, forgotPassword}) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div>
        <ShoppingCartIcon
          onClick={() => setOpen(true)}
          fontSize="large"
          htmlColor="#323232"
        ></ShoppingCartIcon>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <AuthPopForm loginHandle={UserLogin} />
      </Modal>
    </>
  );
}
export default LoginPopUpModal;
