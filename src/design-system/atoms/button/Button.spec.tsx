import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/state/store";
import Button, { ButtonClass } from "./Button";

describe("Button", () => {
  beforeAll(() => {
    render(
      <Provider store={store}>
        <Button text="Send" type={ButtonClass.primary} />
      </Provider>
    );
  });

  test("renders ", async () => {
    const buttonComponent = screen.queryByTestId(/button/i);
    expect(buttonComponent).toBeInTheDocument();
  });
});
