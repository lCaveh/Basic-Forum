import { BasicForumPage } from './app.po';

describe('basic-forum App', () => {
  let page: BasicForumPage;

  beforeEach(() => {
    page = new BasicForumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
