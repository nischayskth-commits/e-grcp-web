import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";

const AuditTimeline = ({ audits }) => {
  return (
    <Card elevation={3} sx={{ borderRadius: 3 }}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Audit Timeline
        </Typography>

        {audits.map((audit, index) => (
          <Box
            key={audit.id}
            display="flex"
            gap={2}
            mb={2}
          >

            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: "primary.main",
                mt: 1,
              }}
            />

            <Box>

              <Typography fontWeight="bold">
                {audit.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {audit.date}
              </Typography>

            </Box>

            {index !== audits.length - 1 && (
              <Divider />
            )}

          </Box>
        ))}

      </CardContent>
    </Card>
  );
};

export default AuditTimeline;