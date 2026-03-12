import { describe, it, expect, mock, beforeEach } from "bun:test";
import { render } from "@testing-library/react";
import RootPage from "../page";

const replaceMock = mock(() => {});

mock.module("next/navigation", () => ({
  useRouter: () => ({
    replace: replaceMock,
  }),
}));

describe("RootPage", () => {
  beforeEach(() => {
    replaceMock.mockClear();
  });

  it("should redirect to /en", () => {
    render(<RootPage />);
    expect(replaceMock).toHaveBeenCalledWith("/en");
  });
});
