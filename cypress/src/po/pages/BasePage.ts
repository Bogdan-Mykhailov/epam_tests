import Credentials from "../../Credentials";

export default abstract class BasePage {
  protected readonly PAGE_TITLE: string;
  protected readonly PAGE_URL: string;

  constructor(credentials: Credentials) {
    this.PAGE_TITLE = credentials.pageTitle;
    this.PAGE_URL = credentials.pageUrl;
  }

  public open(): void {
    cy.visit(this.PAGE_URL)
  }

  public verifyPageUrl(): void {
    cy.url().should('include', this.PAGE_URL)
  }

  public verifyPageTitle(): void {
    cy.title().should('eq', this.PAGE_TITLE)
  }
}
