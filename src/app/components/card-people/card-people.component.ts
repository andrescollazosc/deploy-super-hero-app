import { Component, 
  OnInit, 
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { CardPeopleModel } from '../../models/card-people.model';
import { ColorElementEnum } from 'src/app/enums/color-elements.enum';

@Component({
  selector: 'app-card-people',
  templateUrl: './card-people.component.html',
  styleUrls: ['./card-people.component.scss']
})
export class CardPeopleComponent implements OnInit {

  @Input() configCard: CardPeopleModel;

  @Output() resultEmit = new EventEmitter<CardPeopleModel>();

  private imgDefault = '../../../assets/img/avatar.default.webp';

  constructor() { }

  ngOnInit(): void {
    this.validateConfigCard();
  }  

  public onClick(): void {
    this.resultEmit.emit(this.configCard);
  }

  private validateConfigCard() : void {
    if (!this.configCard) {
      this.configCard = {
        src: this.imgDefault,
        title: 'Titulo...',
        history: 'Tu historia aqui',
        labelButtom: 'OK',
        colorButtom: ColorElementEnum.colorPrimary
      }
    } else {
      if (!this.configCard.src) {
        this.configCard.src = this.imgDefault;    
      }

      if (!this.configCard.colorButtom) {
        this.configCard.colorButtom = ColorElementEnum.colorPrimary;
      }
    }
  }

}
