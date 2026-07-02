import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

const AuditReports = ({ audits }) => {
  return (
    <Card elevation={3} sx={{ borderRadius: 3 }}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Audit Reports
        </Typography>

        <List>

          {audits.map((audit) => (

            <ListItem
              key={audit.id}
              divider
              secondaryAction={
                <Button
                  variant="outlined"
                  size="small"
                >
                  Download
                </Button>
              }
            >

              <ListItemText
                primary={audit.report}
                secondary={audit.department}
              />

            </ListItem>

          ))}

        </List>

      </CardContent>
    </Card>
  );
};

export default AuditReports;