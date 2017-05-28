import { OksociosAngular4Page } from './app.po';

describe('oksocios-angular4 App', () => {
  let page: OksociosAngular4Page;

  beforeEach(() => {
    page = new OksociosAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
