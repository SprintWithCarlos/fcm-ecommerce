import { render, screen } from "@testing-library/react";
import Avatar, { StatusOptions } from "./Avatar";

const imgUrl = "https://source.unsplash.com/collection/9719230/300x300";

describe("Avatar", () => {
  test("renders Avatar", async () => {
    render(<Avatar alt="avatar" src={imgUrl} />);
    const avatarComponent = screen.queryByTestId(/avatar/i);
    expect(avatarComponent).toBeInTheDocument();
  });
  test("renders Avatar with status", async () => {
    render(<Avatar alt="avatar" src={imgUrl} status={StatusOptions.offline} />);
    const avatarComponent = screen.queryByTestId(/avatar/i);
    expect(avatarComponent).toBeInTheDocument();
  });
});
