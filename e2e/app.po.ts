import { browser, by, element } from 'protractor';

export class OksociosAngular4Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
