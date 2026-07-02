import { render, screen } from "@testing-library/react";
import KPICard from "./KPICard";

describe("KPICard", () => {
  test("renders title and value", () => {
    render(
      <KPICard
        title="Total Requests"
        value={10}
        icon={<span>📊</span>}
        color="#1976d2"
      />
    );

    expect(
      screen.getByText("Total Requests")
    ).toBeInTheDocument();

    expect(
      screen.getByText("10")
    ).toBeInTheDocument();
  });
});