describe("Recipes Page", () => {
  it("renders he recipes list", () => {
    // cy.visit(`http://${process.env.HOST}:${process.env.PORT}`);
    cy.visit("http://localhost:3000/recipes");
    //cy.get(".RecipeList").should("exist");
    expect(cy.get(".RecipeList")).to.exist;
  });
});
