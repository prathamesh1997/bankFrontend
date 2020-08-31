import React from "react";

import { Snackbar as Snack } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Snackbar = (props) => {
  return (
    <Snack
      open={props.open}
      autoHideDuration={6000}
      onClose={() => props.onClose()}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      {props.message && (
        <Alert severity={props.severity} onClose={() => props.onClose()}>
          {props.message}
        </Alert>
      )}
    </Snack>
  );
};
Snackbar.defaultProps = {
  severity: "",
  onClose: () => {},
  open: false,
  message: "",
};
