import { ClothDesignPage } from './app.po';

describe('cloth-design App', function() {
  let page: ClothDesignPage;

  beforeEach(() => {
    page = new ClothDesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
