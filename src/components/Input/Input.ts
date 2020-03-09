import BaseComponent from '../BaseComponent/BaseComponent';
import DOMUtils from '../../utils/DOMUtils';
import './Input.css';

export default class Input implements BaseComponent {
  DOMUtils = new DOMUtils();
  placeholder: string;
  onChangedHandler: EventListener;
  name?: string = '';

  constructor(placeholder: string, onChangedHandler: EventListener, name?: string) {
    this.placeholder = placeholder;
    this.name = name;
    this.onChangedHandler = onChangedHandler;
  }

  render(): Element {
    const element = this.DOMUtils.createElement('input', 'input') as HTMLInputElement;

    element.placeholder = this.placeholder;

    element.addEventListener('input', this.onChangedHandler);

    return element;
  }
}