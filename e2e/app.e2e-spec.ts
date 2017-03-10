import { AngularLabsPage } from './app.po';

describe('angular-labs App', () => {
  let page: AngularLabsPage;

  beforeEach(() => {
    page = new AngularLabsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
