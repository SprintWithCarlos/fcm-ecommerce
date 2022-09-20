import { capitalize, formatter } from "./utils";

describe("Capitalize", () => {
  it("should capitalize first letter of the first word of a sentence", () => {
    // Given
    const sentence = "hello world, how are you doing?";
    // When
    const result = capitalize(sentence);
    // Then
    expect(result).toBe("Hello world, how are you doing?");
  });
  it("should capitalize first letter of the first word of a sentence", () => {
    // Given
    const word = "madrid";
    // When
    const result = capitalize(word);
    // Then
    expect(result).toBe("Madrid");
  });
  it("should return empty string if parameters passed is not a string", () => {
    // Given
    const parameter = 3;
    // When
    const result = capitalize(parameter);
    // Then
    expect(result).toBe("");
  });
});
describe("Formatter", () => {
  it("should format '125,00' as currency '$125.00' ", () => {
    // Given
    const amount = "125,00";
    const currency = "USD";
    // When
    const result = formatter(currency, amount);
    // Then
    expect(result).toBe("$125.00");
  });
  it("should format '30,95' as currency '€30.95' ", () => {
    // Given
    const amount = "30,95";
    const currency = "EUR";
    // When
    const result = formatter(currency, amount);
    // Then
    expect(result).toBe("€30.95");
  });
  it("should format 70.75 as currency '70.75' ", () => {
    // Given
    const amount = 70.75;
    const currency = "GBP";
    // When
    const result = formatter(currency, amount);
    // Then
    expect(result).toBe("£70.75");
  });
  it("should format 10 as currency '10.00' ", () => {
    // Given
    const amount = 10;
    const currency = "USD";
    // When
    const result = formatter(currency, amount);
    // Then
    expect(result).toBe("$10.00");
  });
});
