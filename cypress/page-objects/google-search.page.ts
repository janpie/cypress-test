import { getAllJSDocTagsOfKind } from "typescript";

export class GoogleSearch {
  e = {
    cookies: () => cy.get("#L2AGLb"),
    searchInput: () => cy.get("input.gLFyf"),
    results: () => cy.get("h3"),
  };

  search(searchPhrase: string): GoogleSearch {
    this.e.searchInput().type(searchPhrase + "{enter}");
    return this;
  }
  acceptCookies(): GoogleSearch {
    this.e.cookies().click();
    return this;
  }
  verifyResults(): GoogleSearch {
    this.e.results().should("have.length.at.least", 1);
    return this;
  }
}
