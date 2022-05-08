import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import AuthPopForm from "../Forms/AuthPopUpForm";
import { UserLogin } from "../../helper/UserAuth";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  orderButton: {
    width: "120px",
    height: "30px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "rgb(239, 239, 239)",
    cursor: "pointer",
    fontSize: "15px",
    marginTop: "5px",
    "&:hover": {
      backgroundColor: "#ffc836",
      color: "white",
    },
  },
});

function LoginPopUpModalForAdd({ pathName }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setOpen(true)} className={classes.orderButton}>
          Add
        </button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <AuthPopForm loginHandle={UserLogin} pathName={pathName} />
      </Modal>
    </>
  );
}
export default LoginPopUpModalForAdd;
