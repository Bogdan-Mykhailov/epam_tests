export default class Header {
  protected readonly themeCheckbox = '.header__vaulting-container > .theme-switcher-ui > .theme-switcher'

  constructor() {}

  public get themeSwitcher() {
    return cy.get(this.themeCheckbox);
  }

  public clickThemeSwitcher(): void {
    this.themeSwitcher.click();
  }

  public getThemeModeFromLocalStorage() {
    return cy.window().then((state) => {
      return state.localStorage.getItem('theme-mode');
    })
  }

  public verifyClassForThemeMode(expectedClass: string): void {
    cy.get('body').should('have.class', expectedClass)
  }
}
