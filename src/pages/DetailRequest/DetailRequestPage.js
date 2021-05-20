import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderDetailRequest from "../../components/HeaderDetailRequest";
import { Paper, TextareaAutosize } from "@material-ui/core";
import AvatarInfo from "../../components/AvatarInfo";

const useStyles = makeStyles((theme) => ({
  detailRequest: {
    padding: "20px 50px",
  },
  main: {
    padding: "20px 30px",
  },
  paper: {
    marginTop: "20px",
  },
  contentRequest: {
    width: "50%",
    marginTop: "20px",
    lineHeight: "30px",
    fontSize: "16px",
  },
  requestProperties: {
    display: "flex",
    justifyContent: "space-between",
    margin: "30px 0",
  },
  property: {
    width: "48%",
    borderTop: "1px solid #777",
    borderBottom: "1px solid #777",
  },
  lists: {
    border: "1px solid #777",
    padding: "20px",
  },
  item: {
    marginBottom: "30px",
  },
}));

function DetailRequestPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.detailRequest}>
      <HeaderDetailRequest />
      <Paper className={classes.paper}>
        <div className={classes.main}>
          <AvatarInfo />

          <div className={classes.contentRequest}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            consequatur amet asperiores eos repellat cumque assumenda, beatae
            excepturi sint necessitatibus!
          </div>

          <div className={classes.requestProperties}>
            <div className={classes.property}>
              <h4>Category</h4>
            </div>
            <div className={classes.property}>
              <h4>Assignee</h4>
            </div>
          </div>

          <div>
            <h4>Comment (2)</h4>
            <div className={classes.lists}>
              <div className={classes.item}>
                <AvatarInfo />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, distinctio!
                </p>
              </div>
              <div className={classes.item}>
                <AvatarInfo />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, distinctio!
                </p>
              </div>
            </div>
          </div>

          <TextareaAutosize aria-label="empty textarea" placeholder="wi" />
        </div>
      </Paper>
    </div>
  );
}

export default DetailRequestPage;
