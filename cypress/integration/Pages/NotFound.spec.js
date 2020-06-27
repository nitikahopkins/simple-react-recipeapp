describe("NotFound", () => {
  it("renders wrong page message", () => {
    // cy.visit(`http://${process.env.HOST}:${process.env.PORT}`);
    cy.visit("http://localhost:3000/404");
    cy.get("body").should(($div) => {
      const text = $div.text();
      expect(text).to.include("Ooops, wrong page!");
    });
  });
});
