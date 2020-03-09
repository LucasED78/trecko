export default class DOMUtils {
  createElement(tag: string, classes?: string | Array<string>, child?: Element){
    const element = document.createElement(tag);

    if (classes) this.appendClass(element, classes);
    if (child) this.appendChild(element, child);

    return element;
  }

  private appendClass(element: Element, classes: string | Array<string>): Element{
    if(classes) {
      if (classes instanceof Array) {
        element.classList.add(classes.join(' '))
      }
      else element.classList.add(classes);
    }

    return element;
  }

  appendChild(element: Element, child: Element): Element{
    element.appendChild(child);

    return element;
  }
}