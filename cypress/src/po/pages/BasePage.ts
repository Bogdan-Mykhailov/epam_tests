import Credentials from "../../Credentials";

export default abstract class BasePage {
  protected readonly BASE_URL = 'https://www.epam.com/';
  protected readonly PAGE_TITLE: string;

  constructor(credentials: Credentials) {
    this.PAGE_TITLE = credentials.pageTitle;
  }

  public open(path: string = ''): void {
    cy.visit(`${this.BASE_URL}${path}`)
  }

  public verifyPageUrl(expectedUrl: string = ''): void {
    cy.url().should('include', expectedUrl)
  }

  public verifyPageTitle(): void {
    cy.title().should('eq', this.PAGE_TITLE)
  }
}
