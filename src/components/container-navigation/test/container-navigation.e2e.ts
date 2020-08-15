import { newE2EPage } from '@stencil/core/testing';

describe('container-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<container-navigation></container-navigation>');

    const element = await page.find('container-navigation');
    expect(element).toHaveClass('hydrated');
  });
});
