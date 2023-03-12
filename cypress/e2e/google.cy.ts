import { GoogleSearch } from "../page-objects/google-search.page";
const search = new GoogleSearch();

describe("Google Navigation", () => {
  ["Hello", "Hey", "Hello World"].forEach((text) => {
    it(`Google Search ${text}`, () => {
      search.acceptCookies().search(text).verifyResults();
    });
  });
});
