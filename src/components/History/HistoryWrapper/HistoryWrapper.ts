import BaseComponent from "../../BaseComponent/BaseComponent";
import DOMUtils from "../../../utils/DOMUtils";

export default class HistoryWrapper implements BaseComponent {
  DOMUtils = new DOMUtils();
  elements: Array<Element>

  constructor(elements: Array<Element>){
    this.elements = elements;
  }

  render(): Element {
    const element = this.DOMUtils.createElement('section', 'history__wrapper', this.elements);

    return element;
  }
}