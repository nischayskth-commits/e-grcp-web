import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const VendorHistory = ({ vendor }) => {
  const history = [
    {
      title: "Vendor Registered",
      date: vendor.registrationDate,
    },
    {
      title: "Compliance Documents Verified",
      date: "20-Feb-2024",
    },
    {
      title: "First Procurement Awarded",
      date: "05-Mar-2024",
    },
    {
      title: "Latest Risk Assessment Completed",
      date: "15-Jun-2025",
    },
  ];

  return (
    <Card elevation={2}>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={3}
        >
          Vendor History
        </Typography>

        <List>
          {history.map((item, index) => (
            <div key={index}>
              <ListItem>
                <ListItemText
                  primary={item.title}
                  secondary={item.date}
                />
              </ListItem>

              {index !== history.length - 1 && (
                <Divider />
              )}
            </div>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default VendorHistory;