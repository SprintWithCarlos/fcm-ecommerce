import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/state/store";
import Avatar from "./Avatar";

const imgUrl = "https://source.unsplash.com/collection/9719230/300x300";

describe("Avatar", () => {
  beforeAll(() => {
    render(
      <Provider store={store}>
        <Avatar alt="avatar" src={imgUrl} />
      </Provider>
    );
  });

  test("renders ", async () => {
    const avatarComponent = screen.queryByTestId(/avatar/i);
    expect(avatarComponent).toBeInTheDocument();
  });
});
