import BaseComponent from "../BaseComponent/BaseComponent";
import DOMUtils from "../../utils/DOMUtils";
import './Button.css'

export default class Button implements BaseComponent {
  DOMUtils = new DOMUtils();
  text: string;
  onClickHandler: EventListener;

  constructor(text: string, onClickHandler: EventListener){
    this.text = text;
    this.onClickHandler = onClickHandler;
  }

  render(): Element {
    const element = this.DOMUtils.createElement('button', 'button');

    element.textContent = this.text;

    element.addEventListener('click', this.onClickHandler)

    return element;
  }
}