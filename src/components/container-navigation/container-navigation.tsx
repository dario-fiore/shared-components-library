import { Component, h, Host, Prop } from '@stencil/core';
import Logo from "./assets/logo.svg";

@Component({
  tag: 'container-navigation',
  styleUrl: 'container-navigation.less',
  shadow: true,
})
/**
 * Allow to render navigation pages among containers 
 * 
 * @prop title, allow to set the title near the logo
 */
export class ContainerNavigation {

  @Prop() ctaText?: string = "Esplora Sky Tg24, Sky Sport, Sky Video";


  private stylePrefix = 'container-navigation';

  render() {
    return (
      <Host>
        
        <div class={this.stylePrefix}>

          {/* Left panel with logo and CTA */}
          <div class={'left-main-container'}>
            
            <img class={'logo-element'} src={Logo} />

            <div class={'title-element'}><span>{this.ctaText}</span></div>

          </div>
          
          {/* Login hyperlink */}
          <div class={'right-main-container'}>
            
            <span>Login</span>

          </div>

        </div>

      </Host>
    );
  }

}
