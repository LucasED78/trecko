export default class DOMUtils {
  createElement(tag: string, classes?: string | Array<string>, child?: Element | Array<Element>){
    const element = document.createElement(tag);

    if (classes) this.appendClass(element, classes);
    if (child) this.appendChild(element, child);

    return element;
  }

  appendClass(element: Element, classes: string | Array<string>): Element{
    if(classes) {
      if (classes instanceof Array) {
        element.classList.add(classes.splice(0).join(' '))
      }
      else element.classList.add(classes);
    }

    return element;
  }

  appendChild(element: Element, child: Element | Array<Element>): Element{
    if (child instanceof Array && child.length) {
      child.map(e => element.appendChild(e));
    } else if (child instanceof Element){
      element.appendChild(child);
    }

    return element;
  }
}