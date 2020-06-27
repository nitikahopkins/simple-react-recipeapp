import db from "../../../../src/recipesdb";
import slugify from "slugify";

let wrapper = ".individual-recipe";

describe("Individual Recipe Card", () => {
  beforeEach(() => {
    cy.visit(
      `http://localhost:3000/recipes/${slugify(db[0].food, { lower: true })}`
    );
  });
  it("Renders the title", () => {
    cy.get(`${wrapper} h1`).should("have.text", db[0].food);
  });
  it("Renders the image", () => {
    cy.get(`${wrapper} img`).should("exist");
  });
  it("Renders the instructions", () => {
    cy.get(`${wrapper} p`).should("have.text", db[0].instructions);
  });
  it("Renders the id", () => {
    // wrapper.should(($div) => {
    //   expect($div.find("h2")).to.have.text("0");
    // });
    cy.get(`${wrapper} h2`).should("have.text", db[0].id);
  });

  it("renders the audio", () => {
    cy.get(`${wrapper} audio`).should("exist");
  });
});
