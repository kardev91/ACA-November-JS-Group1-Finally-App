import React from "react";
import { Modal } from "react-responsive-modal";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AuthPopForm from "../forms/AuthPopUpForm";
import { UserLogin } from "../../helper/UserAuth";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  icon: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
})

function LoginPopUpModal({ loginHandle, forgotPassword}) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div>
        <ShoppingCartIcon
          onClick={() => setOpen(true)}
          fontSize="large"
          htmlColor="#323232"
          className={classes.icon}
        ></ShoppingCartIcon>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <AuthPopForm loginHandle={UserLogin} />
      </Modal>
    </>
  );
}
export default LoginPopUpModal;
