describe("Home Page", () => {
  it("shows logo", () => {
    const logoText = "BUSMAN";

    cy.visit("/");
    cy.contains(logoText);
  });

  it("fill home page form", () => {
    const companyName = "Company A";
    const name = "Jhon";
    const surname = "Doe";
    const country = "Turkey";
    const slogan = "Kasko yok muska var!";

    cy.visit("/");

    cy.get("#company-name").type(companyName);
    cy.get("#name").type(name);
    cy.get("#surname").type(surname);
    cy.get("#country").type(country);
    cy.get("#slogan").type(slogan);
    cy.get("button").click();

    cy.url("/game");
  });
});
