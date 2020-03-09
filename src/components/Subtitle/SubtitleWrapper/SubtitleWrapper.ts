import BaseComponent from "../../BaseComponent/BaseComponent";
import Subtitle from "../Subtitle";
import DOMUtils from "../../../utils/DOMUtils";
import './SubtitleWrapper.css'

export default class SubtitleWrapper implements BaseComponent {
  DOMUtils = new DOMUtils();
  subtitle: Subtitle

  constructor(subtitle: Subtitle){
    this.subtitle = subtitle;
  }
  
  render(): Element {
    const element = this.DOMUtils.createElement('div', 'subtitle__wrapper', this.subtitle.render());

    return element;
  }
}