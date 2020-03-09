import BaseComponent from "../BaseComponent/BaseComponent";
import DOMUtils from "../../utils/DOMUtils";
import './Subtitle.css';

export default class Subtitle implements BaseComponent {
  DOMUtils = new DOMUtils();
  content: string;
  classes?: string | Array<string>;

  constructor(content: string, classes?: string | Array<string>){
    this.content = content;
    this.classes = classes;
  }

  render(): Element {
    const element = this.DOMUtils.createElement('h2', 'subtitle');
    
    if (this.classes) this.DOMUtils.appendClass(element, this.classes);

    element.textContent = this.content;

    return element;
  }
}