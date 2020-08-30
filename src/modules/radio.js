import React from "react"
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";

export const RadioCommon = withStyles({
    root: {
      color: "#E90000",
  
      thumb: {
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        "&:focus, &:hover, &$active": {
          boxShadow: "inherit"
        }
      },
      backgroundColor: "#fff"
    },
    checked: {}
  })((props) => <Radio color="default" {...props} />);