import { renderHook, act } from "@testing-library/react";

import { useState } from "react";

const useCounter = () => {
  const [count, setCount] =
    useState(0);

  return {
    count,
    increment: () =>
      setCount((c) => c + 1),
  };
};

test("increments counter", () => {
  const { result } = renderHook(() =>
    useCounter()
  );

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});