import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";
import DownloadIcon from "@mui/icons-material/Download";

const files = [
  "Laptop_Quotation.pdf",
  "Vendor_Proposal.pdf",
  "Technical_Specification.pdf",
];

const AttachmentList = () => {
  return (
    <Card sx={{ mt: 2, borderRadius: 3 }}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={3}
        >
          Attachments
        </Typography>

        <Stack spacing={2}>

          {files.map((file) => (
            <Stack
              key={file}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                p: 2,
                border: "1px solid #E5E7EB",
                borderRadius: 2,
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <DescriptionIcon color="primary" />

                <Typography>
                  {file}
                </Typography>
              </Stack>

              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
              >
                Download
              </Button>

            </Stack>
          ))}

        </Stack>

      </CardContent>
    </Card>
  );
};

export default AttachmentList;