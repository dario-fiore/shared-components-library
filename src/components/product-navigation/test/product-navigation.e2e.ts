import { newE2EPage } from '@stencil/core/testing';

describe('product-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<product-navigation></product-navigation>');

    const element = await page.find('product-navigation');
    expect(element).toHaveClass('hydrated');
  });
});
