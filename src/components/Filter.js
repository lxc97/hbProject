import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FilterListIcon from "@material-ui/icons/FilterList";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "800px",
    height: "300px",
    display: "flex",
    alignContent: "space-around",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  formFlex: {
    display: "flex",
    justifyContent: "space-around",
  },

  formBtn: {
    display: "flex",
    justifyContent: "center",
    margin: "15px",
    gap: "100px",
  },
  formText: {
    width: `calc(25% - 40px)`,
    margin: "8px",
  },
}));

export default function Filter() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [content, setContent] = React.useState("");
  const [date, setDate] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [assign, setAssign] = React.useState("");
  const [category, setCategory] = React.useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleAssignChange = (e) => {
    setAssign(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  function handleClear(e) {
    e.preventDefault();
    setName("");
    setContent("");
    setDate("");
    setStatus("");
    setAuthor("");
    setAssign("");
    setCategory("");
  }

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FilterListIcon />
          <Typography color="primary"> Filter options</Typography>
        </AccordionSummary>
        {/* Form filter */}
        <AccordionDetails>
          <form noValidate autoComplete="off">
            <TextField
              className={classes.formText}
              label="Name"
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              className={classes.formText}
              label="Content"
              value={content}
              onChange={handleContentChange}
            />
            <TextField
              className={classes.formText}
              value={date}
              onChange={handleDateChange}
              id="date"
              label="Date Create"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <FormControl className={classes.formText}>
              <InputLabel>Status</InputLabel>
              <Select
                native
                value={status}
                onChange={handleStatusChange}
                inputProps={{
                  name: "status",
                }}
              >
                <option aria-label="None" value="" />
                <option value="status1">Open</option>
                <option value="status2">Inprogress</option>
                <option value="status3">Close</option>
              </Select>
            </FormControl>

            <FormControl className={classes.formText}>
              <InputLabel>Author</InputLabel>
              <Select
                native
                value={author}
                onChange={handleAuthorChange}
                inputProps={{
                  name: "author",
                }}
              >
                <option aria-label="None" value="" />
                <option value="status1">Author 1</option>
                <option value="status2">A2</option>
                <option value="status3">A3</option>
              </Select>
            </FormControl>

            <FormControl className={classes.formText}>
              <InputLabel>Assign</InputLabel>
              <Select
                native
                value={assign}
                onChange={handleAssignChange}
                inputProps={{
                  name: "assign",
                }}
              >
                <option aria-label="None" value="" />
                <option value="status1">HB1</option>
                <option value="status2">HB2</option>
                <option value="status3">HB3</option>
              </Select>
            </FormControl>

            <FormControl className={classes.formText}>
              <InputLabel>Category</InputLabel>
              <Select
                native
                value={category}
                onChange={handleCategoryChange}
                inputProps={{
                  name: "category",
                }}
              >
                <option aria-label="None" value="" />
                <option value="status1">Category 1</option>
                <option value="status2">A2</option>
                <option value="status3">A3</option>
              </Select>
            </FormControl>
          </form>
        </AccordionDetails>
        {/* Button */}
        <div className={classes.formBtn}>
          <Button variant="contained" type="submit" onClick={handleClear}>
            Clear
          </Button>
          <Button variant="contained" color="primary">
            Filter
          </Button>
        </div>
      </Accordion>
    </div>
  );
}
