import { removeTags } from "./removeTags";

describe("removeTags function", () => {
  test("removes all HTML tags from a string", () => {
    const stringWithTags =
      "<p>This is a <strong>test</strong> string with <em>HTML</em> tags.</p>";
    const stringWithoutTags = "This is a test string with HTML tags.";

    expect(removeTags(stringWithTags)).toEqual(stringWithoutTags);
  });

  test("returns an empty string if input is null", () => {
    expect(removeTags(null)).toEqual("");
  });

  test("returns the same string if input has no HTML tags", () => {
    const stringWithoutTags = "This is a test string without HTML tags.";

    expect(removeTags(stringWithoutTags)).toEqual(stringWithoutTags);
  });
});
