import React from "react";
import { PropTypes } from "prop-types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: { marginTop: 100 },
  container: {
    background: "gray",
    borderRadius: "5px",
    width: "200px",
    margin: "0 auto",
    padding: 20,
  },
  heading: { color: "#fff", margin: "0 0 10px 0" },
  button: {
    backgroundColor: "gray",
    color: "#fff",
    border: "2px solid #fff",
    padding: "5px 10px",
    marginTop: 15,
    fontWeight: "bold",
  },
});

const Authwrapper = ({ children, handleSubmit, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.heading}>{title}</h1>
        {children}
        <div>
          <button className={classes.button} onClick={handleSubmit}>
            {title}
          </button>
        </div>
      </div>
    </div>
  );
};
Authwrapper.propTypes = {
  title: PropTypes.string,
  handleSubmit: PropTypes.func,
};

Authwrapper.defaultProps = {
  title: "",
  handleSubmit: () => {},
};

export default Authwrapper;
