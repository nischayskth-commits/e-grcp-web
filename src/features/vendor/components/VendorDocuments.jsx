import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";

const VendorDocuments = ({ vendor }) => {
  return (
    <Card elevation={2}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={3}
        >
          Vendor Documents
        </Typography>

        {vendor.documents &&
        vendor.documents.length > 0 ? (
          <List>

            {vendor.documents.map(
              (document, index) => (
                <ListItem
                  key={index}
                  divider
                >
                  <DescriptionIcon
                    color="primary"
                    sx={{ mr: 2 }}
                  />

                  <ListItemText
                    primary={document}
                  />

                  <Chip
                    label="Verified"
                    color="success"
                    size="small"
                  />
                </ListItem>
              )
            )}

          </List>
        ) : (
          <Typography
            color="text.secondary"
          >
            No documents uploaded.
          </Typography>
        )}

      </CardContent>
    </Card>
  );
};

export default VendorDocuments;