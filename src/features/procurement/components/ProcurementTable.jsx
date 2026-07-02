import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
  TablePagination,
} from "@mui/material";

import StatusChip from "./StatusChip";

const ProcurementTable = ({ procurements }) => {
  const navigate = useNavigate();

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] =
    useState(5);

  const handleSort = (property) => {
    const isAsc =
      orderBy === property &&
      order === "asc";

    setOrder(
      isAsc ? "desc" : "asc"
    );

    setOrderBy(property);
  };

  const sorted = [...procurements].sort(
    (a, b) => {
      if (a[orderBy] < b[orderBy])
        return order === "asc"
          ? -1
          : 1;

      if (a[orderBy] > b[orderBy])
        return order === "asc"
          ? 1
          : -1;

      return 0;
    }
  );

  const paginated = sorted.slice(
    page * rowsPerPage,
    page * rowsPerPage +
      rowsPerPage
  );

  return (
    <Card sx={{ p: 2 }}>
      <Table>

        <TableHead>

          <TableRow>

            <TableCell>

              <TableSortLabel
                active={orderBy === "id"}
                direction={order}
                onClick={() =>
                  handleSort("id")
                }
              >
                ID
              </TableSortLabel>

            </TableCell>

            <TableCell>
              Title
            </TableCell>

            <TableCell>
              Department
            </TableCell>

            <TableCell>
              Requester
            </TableCell>

            <TableCell>
              Vendor
            </TableCell>

            <TableCell>

              <TableSortLabel
                active={
                  orderBy === "amount"
                }
                direction={order}
                onClick={() =>
                  handleSort(
                    "amount"
                  )
                }
              >
                Amount
              </TableSortLabel>

            </TableCell>

            <TableCell>
              Status
            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {paginated.map((item) => (

            <TableRow
              hover
              key={item.id}
              sx={{
                cursor: "pointer",
              }}
              onClick={() =>
                navigate(
                  `/procurement/${item.id}`
                )
              }
            >

              <TableCell>
                {item.id}
              </TableCell>

              <TableCell>
                {item.title}
              </TableCell>

              <TableCell>
                {item.department}
              </TableCell>

              <TableCell>
                {item.requester}
              </TableCell>

              <TableCell>
                {item.vendor}
              </TableCell>

              <TableCell>
                ₹{" "}
                {item.amount.toLocaleString()}
              </TableCell>

              <TableCell>
                <StatusChip
                  status={item.status}
                />
              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

      <TablePagination
        component="div"
        count={procurements.length}
        page={page}
        rowsPerPage={
          rowsPerPage
        }
        onPageChange={(
          event,
          newPage
        ) =>
          setPage(newPage)
        }
        onRowsPerPageChange={(
          event
        ) => {
          setRowsPerPage(
            parseInt(
              event.target.value,
              10
            )
          );
          setPage(0);
        }}
        rowsPerPageOptions={[
          5,
          10,
          25,
        ]}
      />

    </Card>
  );
};

export default ProcurementTable;