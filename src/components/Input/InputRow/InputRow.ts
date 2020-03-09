import BaseComponent from "../../BaseComponent/BaseComponent";
import DOMUtils from "../../../utils/DOMUtils";
import "./InputRow.css"

export default class InputRow implements BaseComponent {
  DOMUtils = new DOMUtils();
  elements: Element[];

  constructor(elements: Element[]) {
    this.elements = elements;
  }

  render(): Element {
    const element = this.DOMUtils.createElement(
      'div', 
      'input__row',
      this.elements,
    );

    return element;
  }
}