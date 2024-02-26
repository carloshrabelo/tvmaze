import { renderHook, act } from "@testing-library/react";

import useDebounce, { DELAY } from "./useDebounce";

jest.useFakeTimers();

type Props = {
  value: string;
  delay: number;
};

describe("useDebounce", () => {
  test("returns the initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", DELAY));

    expect(result.current).toBe("initial");
  });

  test("updates debounced value after specified delay", () => {
    const { result, rerender } = renderHook(
      (props: Props) => useDebounce(props.value, props.delay),
      {
        initialProps: { value: "initial", delay: DELAY }
      }
    );

    expect(result.current).toBe("initial");

    act(() => {
      rerender({ value: "updated", delay: DELAY });
    });

    expect(result.current).toBe("initial");

    act(() => {
      jest.advanceTimersByTime(DELAY);
    });
    expect(result.current).toBe("updated");
  });

  test("clears timeout on unmount", () => {
    const { unmount } = renderHook(() => useDebounce("initial", DELAY));
    unmount();

    expect(jest.getTimerCount()).toBe(0);
  });
});
