import React from "react";
import LayoutDefault from "../../layout/LayoutDefault";
import ListRequest from "../../components/ListRequest";
import HistoryRequest from "../../components/HistoryRequest";
import Filter from "../../components/Filter";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  paperListRequest: {
    width: "70%",
  },
  paperHistoryRequest: {
    width: "28%",
    padding: "10px",
  },
}));

function HomePage(props) {
  const classes = useStyles();
  return (
    <LayoutDefault>
      <div className={classes.flex}>
        <Paper className={classes.paperListRequest}>
          <Filter></Filter>
          <ListRequest></ListRequest>
        </Paper>
        <Paper className={classes.paperHistoryRequest}>
          <HistoryRequest></HistoryRequest>
        </Paper>
      </div>
    </LayoutDefault>
  );
}

export default HomePage;
