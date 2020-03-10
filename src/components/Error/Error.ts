import BaseComponent from "../BaseComponent/BaseComponent";
import DOMUtils from "../../utils/DOMUtils";
import './Error.css';

export default class Error implements BaseComponent {
  DOMUtils = new DOMUtils();
  message: string;

  constructor(message: string){
    this.message = message;
  }

  render(): Element {
    const element = this.DOMUtils.createElement('span', 'error');

    element.textContent = this.message;

    return element;
  }
}