import { render } from "@testing-library/react";

import { show } from "../../mock/show";

import Cover from "./";

describe("Cover component", () => {
  test("renders with given props", () => {
    const { getByText, getByTitle } = render(
      <Cover
        rating={show.rating}
        name={show.name}
        image={show.image}
        genres={show.genres}
      />
    );

    expect(getByText(show.name)).toBeInTheDocument();
    expect(getByText(show.rating)).toBeInTheDocument();
    expect(getByTitle(show.name)).toBeInTheDocument();
    show.genres.forEach((element) => {
      expect(getByText(element)).toBeInTheDocument();
    });
  });

  test("renders skeleton when image prop is not provided", () => {
    const { getByTestId } = render(
      <Cover small rating={show.rating} name={show.name} genres={show.genres} />
    );

    // Asserts for skeleton rendering when image is not provided
    expect(getByTestId("skeleton")).toBeInTheDocument();
  });
});
