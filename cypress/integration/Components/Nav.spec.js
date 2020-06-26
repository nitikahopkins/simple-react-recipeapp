let nav = null;
describe("Nav", () => {
  /*it("renders the home and recipe links", () => {
        cy.visit("http://localhost:3000/");
        //cy.contains("Recipes");
        const nav = cy.get("#main-nav");
        nav.should(($div) => {
            const text = $div.text();
            expect(text).to.include("Home");
            expect(text).to.include("Recipes");
        });
    }); */

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    nav = cy.get("#main-nav");
  });

  it("renders the home link", () => {
    //cy.contains("Recipes");

    nav.should(($div) => {
      const text = $div.text();
      expect(text).to.include("Home");
    });
  });

  it("renders the recipe link", () => {
    //cy.contains("Recipes");
    nav.should(($div) => {
      const text = $div.text();
      expect(text).to.include("Recipes");
    });
  });

  it('clicking "Recipes" navigates to a new url', () => {
    nav.contains("Recipes").click();

    cy.url().should("include", "/recipes");
  });

  it('clicking "Home" navigates to a new url', () => {
    nav.contains("Home").click();

    cy.url().should("include", "/");
  });
});
