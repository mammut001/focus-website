import { describe, it, expect } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import RootPage from "../page";

describe("RootPage", () => {
  const html = renderToStaticMarkup(<RootPage />);

  it("redirects to the new site without waiting for hydration", () => {
    expect(html).toContain('location.replace("https://cv.paytonpei.top/lifemint"+location.hash)');
  });

  it("falls back to a meta refresh when JavaScript is off", () => {
    expect(html).toContain('http-equiv="refresh"');
    expect(html).toContain('href="https://cv.paytonpei.top/lifemint"');
  });
});
