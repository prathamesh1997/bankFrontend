import React from "react"
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";

export const RadioCommon = withStyles({
    root: {
      color: "#E90000",
    },
    checked: {}
  })((props) => <Radio color="default" {...props} />);