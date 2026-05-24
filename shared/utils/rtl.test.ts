import { isRTL, isRTLLanguage } from "./rtl";

describe("isRTL", () => {
  it.each([
    ["שלום", true],
    ["مرحبا", true],
    ["   שלום", true],
    ["שלום hello", true],
    ["hello", false],
    ["hello שלום", false],
    ["12345", false],
    ["—שלום", true],
    ["Aשלום", false],
  ])("returns %s for %p", (text, expected) => {
    expect(isRTL(text)).toBe(expected);
  });
});

describe("isRTLLanguage", () => {
  it.each([
    ["ar", true],
    ["AR", true],
    ["ar-EG", true],
    ["ar_EG", true],
    ["fa", true],
    ["he-IL", true],
    ["ps", true],
    ["ur-PK", true],
    ["yi", true],
    ["en", false],
    ["pt-BR", false],
    ["sr-Latn", false],
  ])("returns %s for %p", (locale, expected) => {
    expect(isRTLLanguage(locale)).toBe(expected);
  });

  it.each([null, undefined])("returns false for %p", (locale) => {
    expect(isRTLLanguage(locale)).toBe(false);
  });
});
