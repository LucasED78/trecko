import BaseComponent from "../BaseComponent/BaseComponent";
import DOMUtils from "../../utils/DOMUtils";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import Input from "../Input/Input";
import Button from "../Button/Button";
import InputRow from "../Input/InputRow/InputRow";
import HistoryWrapper from "../History/HistoryWrapper/HistoryWrapper";
import HistoryItem from "../History/HistoryItem/HistoryItem";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Separator from "../Separator/Separator";
import TreckoHttpImpl from "../../core/http/impl/TreckoHttpImpl";
import TrackRepository from "../../core/repository/impl/TrackRepositoryImpl";
import Track from "../../models/Track";
import { formatDateTime } from "../../utils/DateUtil";
import TrackError from "../../models/TrackError";
import HistoryDescription from "../History/HistoryDescription/HistoryDescription";

export default class App implements BaseComponent {
  DOMUtils = new DOMUtils();
  trackRepository = new TrackRepository(new TreckoHttpImpl());
  code: string = '';
  track?: Track | TrackError;

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
            new Input('Digite o código de rastreio', this.onChangeHandler).render(),
            new Button('Rastrear', this.onClickHandler).render()
          ]).render(),
          new HistoryWrapper([
            new Subtitle('Histórico', 'subtitle--start').render(),
            new HistoryDescription('Nenhum histórico para mostrar').render()
          ]).render()
        ]).render()
      ]
    );

    return element;
  }

  onChangeHandler = async (event: Event) => {
    const element = event.target as HTMLInputElement;

    if (element.style.textTransform !== 'uppercase') {
      element.style.textTransform = 'uppercase';
    } else if (element.value.length == 0) element.style.textTransform = 'initial';

    this.code = element.value;
  }
  
  onClickHandler = async (event: Event) => {
    this.track = await this.trackRepository.track(this.code);

    if (this.track){
      if (this.track instanceof Track){
        this.DOMUtils.removeElement(undefined, 'history__description');
        const items = this.track.tracks.reverse().length;
        const element = this.track.tracks.map((e, i) => {
          if (i < items - 1){
            return this.DOMUtils.createElement('div', '', [
              new HistoryItem(e.status, formatDateTime(e.trackedAt), e.local).render(),
              new Separator().render()
            ])
          }
          else return new HistoryItem(e.status, formatDateTime(e.trackedAt), e.local).render();
        })

        const container = document.querySelector('.history__wrapper');
        
        if (container)
          this.DOMUtils.appendChild(container, element);
      } else console.log(this.track);
    }
  }
}