import BaseComponent from "../BaseComponent/BaseComponent";
import DOMUtils from "../../utils/DOMUtils";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import Input from "../Input/Input";
import Button from "../Button/Button";
import InputRow from "../Input/InputRow/InputRow";
import SubtitleWrapper from "../Subtitle/SubtitleWrapper/SubtitleWrapper";
import HistoryWrapper from "../History/HistoryWrapper/HistoryWrapper";
import HistoryItem from "../History/HistoryItem/HistoryItem";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

export default class App implements BaseComponent {
  DOMUtils = new DOMUtils();

  render(): Element {
    const element = this.DOMUtils.createElement(
      'div', 
      '',
      [
        new Title('Trecko').render(),
        new ContentWrapper([
          new Subtitle(`Quer saber onde está sua encomenda? É bem simples,
          basta inserir o código de rastreio logo abaixo e clicar
          no botão.`).render(),
          new InputRow([
            new Input('Digite o código de rastreio', this.onClickHandler).render(),
            new Button('Rastrear', console.log).render()
          ]).render(),
          new HistoryWrapper([
            new Subtitle('Histórico', 'subtitle--start').render(),
            new HistoryItem('Objeto entrega ao destinatário', '13/12/2019 ás 12:00', 'Vila Olímpia').render()
          ]).render()
        ]).render()
      ]
    );

    return element;
  }

  onClickHandler = (event: Event) => {
    const element = event.target as HTMLInputElement;

    if (element.style.textTransform !== 'uppercase') {
      element.style.textTransform = 'uppercase';
    } else if (element.value.length == 0) element.style.textTransform = 'initial';
    
  }
}