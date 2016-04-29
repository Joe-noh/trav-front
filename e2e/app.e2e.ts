import { TravPage } from './app.po';

describe('trav App', function() {
  let page: TravPage;

  beforeEach(() => {
    page = new TravPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('trav Works!');
  });
});
