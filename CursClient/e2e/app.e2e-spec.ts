import { CursClientPage } from './app.po';

describe('curs-client App', () => {
  let page: CursClientPage;

  beforeEach(() => {
    page = new CursClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
