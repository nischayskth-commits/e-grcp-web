import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ComplianceChart = ({ data }) => {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        bgcolor: "background.paper",
        color: "text.primary",
        transition: "0.3s",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="text.primary"
          mb={2}
        >
          Compliance Trend
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="score"
              stroke="#22c55e"
              fill="#86efac"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ComplianceChart;