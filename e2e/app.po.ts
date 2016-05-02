export class TravPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('trav-app p')).getText();
  }
}
