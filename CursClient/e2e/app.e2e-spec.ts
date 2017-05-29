import { CursClientPage } from './app.po';

describe('curs-client App', () => {
  let page: CursClientPage;

  beforeEach(() => {
    page = new CursClientPage();
  });

  it('should display comment saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
