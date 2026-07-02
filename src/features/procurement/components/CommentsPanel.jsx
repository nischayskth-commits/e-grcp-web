import {
  Card,
  CardContent,
  Typography,
  Divider,
  Stack,
} from "@mui/material";

const comments = [
  {
    user: "Rahul Sharma",
    message: "Please process urgently.",
  },
  {
    user: "Finance",
    message: "Approved from budget.",
  },
];

const CommentsPanel = () => {
  return (
    <Card sx={{ mt: 2, borderRadius: 3 }}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Comments
        </Typography>

        <Stack spacing={2}>

          {comments.map((comment, index) => (
            <div key={index}>

              <Typography
                fontWeight="bold"
              >
                {comment.user}
              </Typography>

              <Typography
                color="text.secondary"
              >
                {comment.message}
              </Typography>

              {index < comments.length - 1 && (
                <Divider sx={{ mt: 2 }} />
              )}

            </div>
          ))}

        </Stack>

      </CardContent>
    </Card>
  );
};

export default CommentsPanel;