import { render, screen } from "@testing-library/react";
import Icon from "./Icon";
import { ReactComponent as UpIcon } from "@/design-system/atoms/icons/up.svg";

describe("Icon", () => {
  test("renders Icon ", async () => {
    render(<Icon src={<UpIcon />} name="up" />);
    const iconComponent = screen.queryByTestId(/up/i);
    expect(iconComponent).toBeInTheDocument();
  });
  test("renders Icon rounder", async () => {
    render(<Icon src={<UpIcon />} name="up" rounded />);
    const iconComponent = screen.queryByTestId(/up/i);
    expect(iconComponent).toBeInTheDocument();
    expect(iconComponent?.style.borderRadius).toBe("50%");
  });
});
