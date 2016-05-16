import {TravPage} from './app.po';

describe('trav App', function() {
  let page: TravPage;

  beforeEach(() => {
    page = new TravPage();
  })

  it('shows "Signin with Twitter"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Signin with Twitter');
  });
});
