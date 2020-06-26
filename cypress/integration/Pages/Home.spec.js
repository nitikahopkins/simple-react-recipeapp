describe("Home", () => {
  it("renders home text", () => {
    // cy.visit(`http://${process.env.HOST}:${process.env.PORT}`);
    cy.visit("http://localhost:3000/");
    cy.get("body").should(($div) => {
      const text = $div.text();
      expect(text).to.include("Home");
    });
  });
});
