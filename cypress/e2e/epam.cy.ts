/// <reference types="cypress" />

import HomePage from "../src/po/pages/HomePage";

describe('Epam tests', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.open();
  })

  it('Should verify correct page title', () => {
    homePage.verifyPageUrl();
    homePage.verifyPageTitle();
  });

  it('Should switch theme to opposite color', () => {
    homePage.header.getThemeModeFromLocalStorage().then((initState) => {
      homePage.header.clickThemeSwitcher();

      const expectedThemeMode = initState === 'dark-mode' ? 'dark-mode' : 'light-mode';
      homePage.header.verifyClassForThemeMode(expectedThemeMode);
    })
  });
})
