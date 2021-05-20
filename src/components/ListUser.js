import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { requestList } from "../redux/actions/listRequest";

const dataTitles = ["Name", "Staff ID", "Department", "Role", "Status"];

const useStyles = makeStyles((theme) => ({
  colorTable: {
    backgroundColor: "#b0b4af99",
  },
  pagination: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
}));

export default function ListUser() {
  const dispatch = useDispatch();
  const listRequests = useSelector((state) => state.listRequest);
  const requests = listRequests.data ? listRequests.data : "";
  const rows = requests.data ? requests.data : "";
  useEffect(() => {
    dispatch(requestList());
  }, []);

  const classes = useStyles();
  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow className={classes.colorTable}>
            {dataTitles.map((title, index) => (
              <TableCell key={index}>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows
            ? rows.map((row) => {
                const {
                  id,
                  name,
                  content,
                  user,
                  due_date,
                  category,
                  manager,
                  status_admin,
                } = row;
                const author = user.name;
                const categoryName = category.name;
                const assignee = manager.name;
                return (
                  <TableRow key={row.id}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{content}</TableCell>
                    <TableCell>{author}</TableCell>
                    <TableCell>{due_date}</TableCell>
                    <TableCell>{categoryName}</TableCell>
                    <TableCell>{assignee}</TableCell>
                    <TableCell>{status_admin}</TableCell>
                  </TableRow>
                );
              })
            : null} */}
          <TableRow>
            <TableCell>Le Xuan A</TableCell>
            <TableCell>SDC</TableCell>
            <TableCell>HB2</TableCell>
            <TableCell>PM</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className={classes.pagination}>
        <Pagination count={10} size="large" />
      </div>
    </>
  );
}
