import { Component, OnInit, Input } from '@angular/core';
import { ModalPrimaryModel } from '../../models/modal-primary.model';

@Component({
  selector: 'app-modal-primary',
  templateUrl: './modal-primary.component.html',
  styleUrls: ['./modal-primary.component.scss']
})
export class ModalPrimaryComponent implements OnInit {

  @Input() configModalPrimary: ModalPrimaryModel;
  @Input() modalId: string;

  constructor() { }

  ngOnInit(): void {
    this.validateConfiguration();
  }

  private validateConfiguration(): void {
    if (!this.configModalPrimary) {
      this.configModalPrimary = {
        labelButtomMain: 'Modal Aqui',
        modalTitle: 'Titulo...',
        message: 'Aqui debes poner tu mensaje',
        labelButtomClose: 'cerrar',
        labelButtomConfirm: 'Aceptar'
      };
    }
  }


}
