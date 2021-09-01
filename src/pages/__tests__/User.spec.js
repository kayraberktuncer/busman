import { render } from "@testing-library/react";
import { HomePage } from "../HomePage";

describe("HomePage", () => {
  it("loads user data on first render", () => {
    const getAllData = jest.fn().mockName("getAllData");

    render(<HomePage getAllData={getAllData} />);

    expect(getAllData).toHaveBeenCalled();
  });
});
