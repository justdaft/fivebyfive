import { FivebyfivePage } from './app.po';

describe('fivebyfive App', function() {
  let page: FivebyfivePage;

  beforeEach(() => {
    page = new FivebyfivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
