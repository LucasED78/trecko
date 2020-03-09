import BaseComponent from "../../BaseComponent/BaseComponent";
import DOMUtils from "../../../utils/DOMUtils";
import HistoryDescription from "../HistoryDescription/HistoryDescription";

export default class HistoryItem implements BaseComponent {
  DOMUtils = new DOMUtils();
  title: string;
  date: string;
  local: string;

  constructor(title: string, date: string, local: string){
    this.title = title;
    this.date = date;
    this.local = local;
  }

  render(): Element {
    const element = this.DOMUtils.createElement('article', '', [
      new HistoryDescription(this.title, ['history__description--success']).render(),
      new HistoryDescription(this.date).render(),
      new HistoryDescription(this.local).render()
    ])

    return element;
  }
}