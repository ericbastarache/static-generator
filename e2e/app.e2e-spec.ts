import { StaticGeneratorPage } from './app.po';

describe('static-generator App', function() {
  let page: StaticGeneratorPage;

  beforeEach(() => {
    page = new StaticGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
