import { QuoteCalculatorPage } from './app.po';

describe('quote-calculator App', () => {
  let page: QuoteCalculatorPage;

  beforeEach(() => {
    page = new QuoteCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
