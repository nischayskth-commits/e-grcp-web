import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const ExportButton = ({ data }) => {
  const handleExport = () => {
    const headers = [
      "ID",
      "Title",
      "Department",
      "Requester",
      "Vendor",
      "Amount",
      "Status",
      "Priority",
      "Created Date",
    ];

    const rows = data.map((item) => [
      item.id,
      item.title,
      item.department,
      item.requester,
      item.vendor,
      item.amount,
      item.status,
      item.priority,
      item.createdDate,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "procurements.csv";

    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <Button
      variant="contained"
      startIcon={<DownloadIcon />}
      onClick={handleExport}
    >
      Export
    </Button>
  );
};

export default ExportButton;