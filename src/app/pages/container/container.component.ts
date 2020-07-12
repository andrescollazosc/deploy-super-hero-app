import { Component, OnInit } from '@angular/core';
import { CardPeopleModel } from '../../models/card-people.model';
import { ModalPrimaryModel } from '../../models/modal-primary.model';
import { ColorElementEnum } from 'src/app/enums/color-elements.enum';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  // Config Modal primary
  public configModalItems: ModalPrimaryModel[] = [
    null,
    {
      labelButtomMain: 'Eliminar',
      modalTitle: 'Eliminar usuario',
      message: 'Esta seguro que desea eliminar el usuario',
      labelButtomClose: 'Cancelar',
      labelButtomConfirm: 'Confirmar',
    },
  ];

  // Configuración de las cards
  public superHeroItems: CardPeopleModel[] = [
    null,
    {
      id: 1,
      title: 'Bruce waine',
      history: 'Vigilante enmascarado de ciudad gotica.',
      src: '../../../assets/img/batman-hero.jpg',
      labelButtom: 'Ver...',
    },
    {
      id: 2,
      title: 'Clark Kent',
      history: 'Vigilante criptoniano en el planeta tierra',
      src: '../../../assets/img/superman.jpg',
      labelButtom: 'Ver...',
      colorButtom: ColorElementEnum.colorSuccess
    },
    {
      id: 3,
      title: 'Scarlet',
      history: 'Personaje hermosa de Marvel',
      src: '../../../assets/img/viuda-negra.jpg',
      labelButtom: 'Ver...',
    },
    {
      id: 4,
      title: 'SpiderMan',
      history: 'Personaje que trepa paredes en NY',
      src: '../../../assets/img/spidermanbio_portada.jpg',
      labelButtom: 'Editar'
    },
    {
      id: 5,
      title: 'Wonder woman',
      history: 'Mujer amazona con super poderres',
      src: '../../../assets/img/wonderwomanprimercomic-696x440.jpg',
      labelButtom: 'Editar',
      colorButtom: ColorElementEnum.colorDanger
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  public showResult(superHero: CardPeopleModel): void {
    console.log(superHero);
    alert(JSON.stringify(superHero));
  }
}
