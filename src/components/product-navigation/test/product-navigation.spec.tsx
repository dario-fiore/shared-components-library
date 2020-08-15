import { newSpecPage } from '@stencil/core/testing';
import { ProductNavigation } from '../product-navigation';

describe('product-navigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProductNavigation],
      html: `<product-navigation></product-navigation>`,
    });
    expect(page.root).toEqualHtml(`
      <product-navigation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </product-navigation>
    `);
  });
});
