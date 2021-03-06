import BaseComponent from '../BaseComponent/BaseComponent';
import "./Title.css";
import DOMUtils from '../../utils/DOMUtils';

export default class Title implements BaseComponent {
  title: string;
  DOMUtils = new DOMUtils();

  constructor(title: string){
    this.title = title;
  }

  render(): Element{
    const element = this.DOMUtils.createElement('h1', 'title');
    
    element.textContent = this.title;

    return element;
  }
}