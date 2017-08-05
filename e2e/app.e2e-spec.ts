import { FinalPortPage } from './app.po';

describe('final-port App', () => {
  let page: FinalPortPage;

  beforeEach(() => {
    page = new FinalPortPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
