import { render, screen } from "@testing-library/react";
import Icon from "./Icon";
import { ReactComponent as UpIcon } from "@/design-system/atoms/icons/up.svg";

describe("Icon", () => {
  beforeAll(() => {
    render(<Icon src={<UpIcon />} name="up" />);
  });

  test("renders ", async () => {
    const iconComponent = screen.queryByTestId(/icon/i);
    expect(iconComponent).toBeInTheDocument();
  });
});
