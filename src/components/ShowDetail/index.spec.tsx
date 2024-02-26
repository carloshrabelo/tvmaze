import { render } from "@testing-library/react";

import { show } from "../../mock/show";

import ShowDetail from "./";

describe("ShowDetail component", () => {
  test("renders correctly with provided data", () => {
    const { getByText, queryByTestId } = render(
      <ShowDetail
        name={show.name}
        image={show.image}
        genres={show.genres}
        rating={show.rating}
        status={show.status}
      />
    );

    expect(getByText(show.name)).toBeInTheDocument();
    expect(getByText(show.rating)).toBeInTheDocument();
    expect(getByText(show.status)).toBeInTheDocument();
    show.genres.forEach((element) => {
      expect(getByText(element)).toBeInTheDocument();
    });
    expect(queryByTestId("skeleton")).not.toBeInTheDocument();
  });

  test("renders correctly without image", () => {
    const { getByText, getByTestId } = render(
      <ShowDetail
        name={show.name}
        genres={show.genres}
        rating={show.rating}
        status={show.status}
      />
    );

    expect(getByText(show.name)).toBeInTheDocument();
    expect(getByText(show.rating)).toBeInTheDocument();
    expect(getByText(show.status)).toBeInTheDocument();
    show.genres.forEach((element) => {
      expect(getByText(element)).toBeInTheDocument();
    });
    expect(getByTestId("skeleton")).toBeInTheDocument();
  });
});
