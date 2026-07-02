import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";

const MissingDocuments = ({
  compliances,
}) => {

  const documents =
    compliances.filter(
      (item) =>
        item.documentStatus ===
        "Missing"
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
          Missing Documents
        </Typography>

        <List>

          {documents.map(
            (item) => (

              <ListItem
                key={item.id}
                divider
              >

                <ListItemText
                  primary={item.title}
                  secondary={
                    item.department
                  }
                />

                <Chip
                  label="Missing"
                  color="warning"
                />

              </ListItem>

            )
          )}

        </List>

      </CardContent>
    </Card>
  );
};

export default MissingDocuments;