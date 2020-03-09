import BaseComponent from "../BaseComponent/BaseComponent";
import DOMUtils from "../../utils/DOMUtils";
import './ContentWrapper.css';

export default class ContentWrapper implements BaseComponent {
  DOMUtils = new DOMUtils();
  elements: Element | Array<Element>

  constructor(elements: Element | Array<Element>) {
    this.elements = elements;
  }

  render(): Element {
    const element = this.DOMUtils.createElement('div', 'content__wrapper', this.elements);

    return element;
  }
}