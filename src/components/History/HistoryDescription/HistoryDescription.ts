import './HistoryDescription.css';
import BaseComponent from '../../BaseComponent/BaseComponent';
import DOMUtils from '../../../utils/DOMUtils';

export default class HistoryDescription implements BaseComponent {
  DOMUtils = new DOMUtils();
  content: string;
  classes?: string | Array<string>;
  
  constructor(content: string, classes?: string | Array<string>){
    this.content = content;
    this.classes = classes;
  }

  render(): Element {
    const element = this.DOMUtils.createElement('p', 'history__description')

    if(this.classes) this.DOMUtils.appendClass(element, this.classes);

    element.textContent = this.content;

    return element;
  }
}