import Logo from '../assets/logo.svg'
import {IQuickLink} from '../../components/product-navigation/product-navigation'

export default {
  title: 'Procuct Navigation',
};


const SAMPLE_LINKS: IQuickLink[] = [{
  href:"/",
  description:"CORONAVIRUS"
},{
  href:"/",
  description:"IL BONUS TRACKER DI SKY TG24"
},{
  href:"/",
  description:"SPETTACOLO",
  highlighted: true
},{
  href:"/",
  description:"VITE: INTERVISTA A BOTTURA"
}]


export const Sample = () => `<product-navigation product-logo="${Logo}" quick-links='${JSON.stringify(SAMPLE_LINKS)}'></product-navigation>`;