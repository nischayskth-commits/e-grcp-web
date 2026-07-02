import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RiskBarChart = ({
  risks,
}) => {

  const categories = {};

  risks.forEach((risk) => {
    categories[risk.category] =
      (categories[risk.category] || 0) +
      1;
  });

  const data = Object.keys(
    categories
  ).map((key) => ({
    category: key,
    total: categories[key],
  }));

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
          Risks by Category
        </Typography>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="category" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="total"
              fill="#1976d2"
            />
          </BarChart>
        </ResponsiveContainer>

      </CardContent>
    </Card>
  );
};

export default RiskBarChart;