import BaseComponent from "../BaseComponent/BaseComponent";
import DOMUtils from "../../utils/DOMUtils";
import "./Separator.css";

export default class Separator implements BaseComponent {
  DOMUtils = new DOMUtils();

  render(): Element {
    return this.DOMUtils.createElement('div', 'separator');
  }
}