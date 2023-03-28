import React from "react";
import { PropTypes } from "prop-types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  label: { color: "#fff" },
  input: { padding: "5px 10px", marginTop: "5px", outline: "none" },
  error: { color: "#822121" },
});

const TextInputFields = ({
  user,
  error,
  getUserLocal,
  handleChange,
  label,
  invalidError,
  value,
}) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.label}>{label}</div>
      <input
        className={classes.input}
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
        value={value}
      />
      {!user && error && <span className={classes.error}>{error}</span>}
      {getUserLocal !== user && user && (
        <span className={classes.error}>{invalidError}</span>
      )}
    </div>
  );
};

TextInputFields.prototype = {
  user: PropTypes.string,
  error: PropTypes.string,
  getUserLocal: PropTypes.string,
  label: PropTypes.string,
  invalidError: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
TextInputFields.defaultProps = {
  user: "",
  error: "",
  getUserLocal: "",
  label: "",
  invalidError: "",
  value: "",
  handleChange: () => {},
};

export default TextInputFields;
