import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Stack,
} from "@mui/material";

import * as XLSX from "xlsx";

const ReportsTable = ({
  reports,
}) => {

  const exportCSV = () => {

    const headers = [
      "Report",
      "Category",
      "Created Date",
      "Status",
    ];

    const rows = reports.map(
      (report) => [
        report.name,
        report.category,
        report.createdDate,
        report.status,
      ]
    );

    const csvContent = [
      headers,
      ...rows,
    ]
      .map((row) =>
        row.join(",")
      )
      .join("\n");

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const url =
      window.URL.createObjectURL(
        blob
      );

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "Reports.csv";

    link.click();

    window.URL.revokeObjectURL(
      url
    );

  };

  const exportExcel = () => {

    const worksheet =
      XLSX.utils.json_to_sheet(
        reports
      );

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Reports"
    );

    XLSX.writeFile(
      workbook,
      "Reports.xlsx"
    );

  };

  return (
    <Paper
      sx={{
        borderRadius: 3,
        overflow: "hidden",
      }}
    >

      <Stack
        direction="row"
        spacing={2}
        p={2}
      >

        <Button
          variant="contained"
          onClick={exportCSV}
        >
          Export CSV
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={
            exportExcel
          }
        >
          Export Excel
        </Button>

      </Stack>

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>
              Report
            </TableCell>

            <TableCell>
              Category
            </TableCell>

            <TableCell>
              Created
            </TableCell>

            <TableCell>
              Status
            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {reports.map(
            (report) => (

              <TableRow
                key={report.id}
              >

                <TableCell>
                  {report.name}
                </TableCell>

                <TableCell>
                  {
                    report.category
                  }
                </TableCell>

                <TableCell>
                  {
                    report.createdDate
                  }
                </TableCell>

                <TableCell>
                  {
                    report.status
                  }
                </TableCell>

              </TableRow>

            )
          )}

        </TableBody>

      </Table>

    </Paper>
  );
};

export default ReportsTable;