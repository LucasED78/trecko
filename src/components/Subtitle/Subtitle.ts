import BaseComponent from "../BaseComponent/BaseComponent";
import DOMUtils from "../../utils/DOMUtils";
import './Subtitle.css';

export default class Subtitle implements BaseComponent {
  content: string;
  DOMUtils = new DOMUtils();

  constructor(content: string){
    this.content = content;
  }

  render(): Element {
    const element = this.DOMUtils.createElement('h2', 'subtitle');
    
    element.textContent = this.content;

    return element;
  }
}