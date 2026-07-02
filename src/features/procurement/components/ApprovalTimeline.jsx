import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
} from "@mui/material";

const steps = [
  {
    title: "Employee Submitted",
    date: "01 Jun 2026",
  },
  {
    title: "Manager Approved",
    date: "02 Jun 2026",
  },
  {
    title: "Procurement Approved",
    date: "03 Jun 2026",
  },
  {
    title: "Finance Approved",
    date: "04 Jun 2026",
  },
];

const ApprovalTimeline = () => {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={3}
        >
          Approval History
        </Typography>

        <Stack spacing={3}>
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              {/* Timeline */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    bgcolor: "success.main",
                  }}
                />

                {index !== steps.length - 1 && (
                  <Box
                    sx={{
                      width: 2,
                      height: 45,
                      bgcolor: "#d1d5db",
                    }}
                  />
                )}
              </Box>

              {/* Content */}
              <Box>
                <Typography fontWeight="bold">
                  {step.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {step.date}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

      </CardContent>
    </Card>
  );
};

export default ApprovalTimeline;