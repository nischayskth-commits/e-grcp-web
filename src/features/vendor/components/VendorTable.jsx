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

const VendorTable = ({ vendors }) => {
  const navigate = useNavigate();

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

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

  const sorted = [...vendors].sort(
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
                active={
                  orderBy === "id"
                }
                direction={order}
                onClick={() =>
                  handleSort("id")
                }
              >
                Vendor ID
              </TableSortLabel>
            </TableCell>

            <TableCell>
              <TableSortLabel
                active={
                  orderBy === "name"
                }
                direction={order}
                onClick={() =>
                  handleSort("name")
                }
              >
                Vendor Name
              </TableSortLabel>
            </TableCell>

            <TableCell>
              Category
            </TableCell>

        <TableCell>
  Contact Person
</TableCell>

<TableCell>
  Email
</TableCell>

<TableCell>
  Phone
</TableCell>

            <TableCell>
              City
            </TableCell>

        

            

          </TableRow>

        </TableHead>

        <TableBody>

          {paginated.map(
            (vendor) => (
              <TableRow
                hover
                key={vendor.id}
                sx={{
                  cursor: "pointer",
                }}
                onClick={() =>
                  navigate(
                    `/vendors/${vendor.id}`
                  )
                }
              >

                <TableCell>
                  {vendor.id}
                </TableCell>

                <TableCell>
                  {vendor.name}
                </TableCell>

                <TableCell>
                  {vendor.category}
                </TableCell>

              <TableCell>
  {vendor.contactPerson}
</TableCell>

<TableCell>
  {vendor.email}
</TableCell>

<TableCell>
  {vendor.phone}
</TableCell>

<TableCell>
  {vendor.city}
</TableCell>

                <TableCell>
                  {vendor.risk}
                </TableCell>

                

              </TableRow>
            )
          )}

        </TableBody>

      </Table>

      <TablePagination
        component="div"
        count={vendors.length}
        page={page}
        rowsPerPage={
          rowsPerPage
        }
        rowsPerPageOptions={[
          5,
          10,
          25,
        ]}
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
      />

    </Card>
  );
};

export default VendorTable;