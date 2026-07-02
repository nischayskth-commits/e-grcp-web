import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";

const ComplianceViolations = ({
  compliances,
}) => {

  const violations =
    compliances.filter(
      (item) =>
        item.status === "Violation"
    );

  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Violations
        </Typography>

        <List>

          {violations.map(
            (item) => (

              <ListItem
                key={item.id}
                divider
              >

                <ListItemText
                  primary={item.title}
                  secondary={item.owner}
                />

                <Chip
                  label={
                    item.severity
                  }
                  color="error"
                />

              </ListItem>

            )
          )}

        </List>

      </CardContent>
    </Card>
  );
};

export default ComplianceViolations;