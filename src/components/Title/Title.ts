import "./Title.css";
import DOMUtils from '../../utils/DOMUtils';

export default class Title {
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