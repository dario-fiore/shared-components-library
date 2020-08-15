import { Component, Host, Prop, h, State, Watch } from '@stencil/core';
import Toggle from './assets/toggle.svg'

export interface IQuickLink {
  /**
   * Link to navigate
   */
  href: string;

  /**
   * Title to show
   */
  description: string;

  /**
   * If content will marked with primary color
   */
  highlighted?: boolean;
}

@Component({
  tag: 'product-navigation',
  styleUrl: 'product-navigation.less',
  shadow: true,
})

/**
 * Allow to render navigation on products
 *
 * @prop title, allow to set the title near the logo
 */
export class ProductNavigation {
  /**
   * Descriptor that allow to load links to different page
   */
  @Prop() quickLinks: string;

  /**
   * Product logo 
   */
  @Prop() productLogo: string;


  /**
   * Inner parsed element for quickLinks
   * 
   * @see ${quickLinks}
   */
  @State() innerQuickLinks: Array<IQuickLink>;

   componentWillLoad() {
    this.parseQuickLinks(this.quickLinks);
  }

  @Watch('innerQuickLinks')
  parseQuickLinks(quickLinks: string) {    
    if (quickLinks) this.innerQuickLinks = JSON.parse(quickLinks);
  }
  
  private stylePrefix = 'product-navigation';

  render() {
   
    return (
      <Host>
        <div class={this.stylePrefix}>
          
          <div class={'left-main-container'}>

            <img class={'toggler-element'} src={Toggle} />
              
            <img class={'logo-element'} src={this.productLogo} />
                    
          </div>

          <div class={'right-main-container'}>

            <ul class={'navigation-wrapper'}>
              
              {this.innerQuickLinks.map(link => {
                
                return <li class={!!link.highlighted ? 'highlighted-link' :'' }><a href={link.href}>{link.description}</a></li>

              })}

            </ul>

          </div>

        </div>
      </Host>
    );
  }
}
