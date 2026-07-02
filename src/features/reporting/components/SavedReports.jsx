import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const SavedReports = ({
  reports,
}) => {

  const saved =
    reports.filter(
      (r) =>
        r.status === "Saved"
    );

  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Saved Reports
        </Typography>

        <List>

          {saved.map(
            (report) => (

              <ListItem
                key={report.id}
                divider
              >

                <ListItemText
                  primary={
                    report.name
                  }
                  secondary={
                    report.createdDate
                  }
                />

              </ListItem>

            )
          )}

        </List>

      </CardContent>
    </Card>
  );
};

export default SavedReports;