import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Button, { ButtonClass } from "./Button";

describe("Button", () => {
  beforeAll(() => {
    render(<Button type={ButtonClass.primary}>Send</Button>);
  });

  test("renders ", async () => {
    const buttonComponent = screen.queryByTestId(/button/i);
    expect(buttonComponent).toBeInTheDocument();
  });
});
