import { describe, it, expect } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import RootPage from "../page";

describe("RootPage", () => {
  const html = renderToStaticMarkup(<RootPage />);

  it("redirects to a locale without waiting for hydration", () => {
    expect(html).toContain("location.replace(");
    expect(html).toContain("'zh'");
    expect(html).toContain("'fr'");
  });

  it("falls back to /en/ when JavaScript is off", () => {
    expect(html).toContain('http-equiv="refresh"');
    expect(html).toContain('href="/en/"');
  });
});
