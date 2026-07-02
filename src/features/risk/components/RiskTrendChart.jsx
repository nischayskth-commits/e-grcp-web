import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RiskTrendChart = ({ risks }) => {
  const data = [
    { month: "Jan", risks: 4 },
    { month: "Feb", risks: 6 },
    { month: "Mar", risks: 5 },
    { month: "Apr", risks: 7 },
    { month: "May", risks: 8 },
    { month: "Jun", risks: risks.length },
  ];

  return (
    <Card
      elevation={3}
      sx={{ borderRadius: 3 }}
    >
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Risk Trends
        </Typography>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="risks"
              stroke="#1976d2"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

      </CardContent>
    </Card>
  );
};

export default RiskTrendChart;