import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";

const ExpiredCertifications = ({
  compliances,
}) => {

  const expired =
    compliances.filter(
      (item) =>
        new Date(
          item.certificationExpiry
        ) < new Date()
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
          Expired Certifications
        </Typography>

        <List>

          {expired.map(
            (item) => (

              <ListItem
                key={item.id}
                divider
              >

                <ListItemText
                  primary={item.title}
                  secondary={
                    item.certificationExpiry
                  }
                />

                <Chip
                  label="Expired"
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

export default ExpiredCertifications;