import { newSpecPage } from '@stencil/core/testing';
import { ContainerNavigation } from '../container-navigation';

describe('container-navigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContainerNavigation],
      html: `<container-navigation></container-navigation>`,
    });
    expect(page.root).toEqualHtml(`
      <container-navigation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </container-navigation>
    `);
  });
});
