import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#2E7D32",
  "#F57C00",
  "#D32F2F",
];

const RiskDistributionChart = ({
  risks,
}) => {
  const data = [
    {
      name: "Open",
      value: risks.filter(
        (r) => r.status === "Open"
      ).length,
    },
    {
      name: "Approved",
      value: risks.filter(
        (r) => r.status === "Approved"
      ).length,
    },
    {
      name: "Closed",
      value: risks.filter(
        (r) => r.status === "Closed"
      ).length,
    },
  ].filter(
    (item) => item.value > 0
  );

  const total = data.reduce(
    (sum, item) => sum + item.value,
    0
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
          Risk Distribution
        </Typography>

        <ResponsiveContainer
          width="100%"
          height={330}
        >
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="45%"
              innerRadius={55}
              outerRadius={105}
              paddingAngle={3}
              isAnimationActive
              stroke="#fff"
              strokeWidth={3}
            >
              {data.map(
                (entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                          COLORS.length
                      ]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip
              formatter={(
                value,
                name
              ) => {
                const percentage = (
                  (value / total) *
                  100
                ).toFixed(1);

                return [
                  `${value} Risks (${percentage}%)`,
                  name,
                ];
              }}
            />

            <Legend
              verticalAlign="bottom"
              iconType="circle"
              wrapperStyle={{
                paddingTop: 20,
              }}
            />

          </PieChart>
        </ResponsiveContainer>

      </CardContent>
    </Card>
  );
};

export default RiskDistributionChart;