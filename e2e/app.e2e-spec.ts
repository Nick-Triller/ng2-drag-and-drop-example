import { DragulaTestPage } from './app.po';

describe('dragula-test App', function() {
  let page: DragulaTestPage;

  beforeEach(() => {
    page = new DragulaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
