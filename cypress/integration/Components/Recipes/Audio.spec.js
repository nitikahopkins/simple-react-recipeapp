const { cyan } = require("@material-ui/core/colors");

import db from "../../../../src/recipesdb";
import slugify from "slugify";

describe("audio", () => {
  it("renders audio", () => {
    cy.visit(
      `http://localhost:3000/recipes/${slugify(db[0].food, { lower: true })}`
    );
    cy.get(".player").should("exist");
  });
});
