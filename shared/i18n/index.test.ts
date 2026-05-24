import { languageOptions, languages } from "./index";
import { dateLocale, locales } from "../utils/date";

const supportedLocales = ["ca_ES", "da_DK", "id_ID", "ro_RO", "th_TH"] as const;

describe("shared locale registry", () => {
  it("keeps the supported language list aligned with date locales", () => {
    expect(languages).toEqual(languageOptions.map((option) => option.value));
    expect([...languages].sort()).toEqual(Object.keys(locales).sort());
  });

  it.each(supportedLocales)("exposes %s in the locale map", (locale) => {
    expect(languages).toContain(locale);
    expect(dateLocale(locale)).toBeDefined();
  });
});
