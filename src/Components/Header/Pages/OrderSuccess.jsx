import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useStateValue } from "../../stateProvider";
import { useHistory } from "react-router-dom";

const OrderSuccess = () => {
  const [open, setOpen] = useState(true);
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch({
      type: "ORDER SUCCESS",
      payload: [],
    });

    history.push("/");
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Order Successful"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img
              style={{ objectFit: "contain", width: "280px" }}
              src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif"
              alt="order_success"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OrderSuccess;
