import {Component, OnInit} from '@angular/core';
import {
  ButtonCloseDirective, ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent, ModalTitleDirective
} from '@coreui/angular';
import {ModalService, LinkItem} from '../../../services/ModalService/modal-service';

@Component({
  selector: 'app-element-not-available',
  imports: [
    ButtonDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent
  ],
  standalone: true,
  templateUrl: './element-not-available.html',
  styleUrl: './element-not-available.css',
})
export class ElementNotAvailable implements OnInit {
  isVisible = false;
  modalTitle = '';
  modalMessage = '';
  modalLinks: LinkItem[] = [];

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.modalTrigger$.subscribe(({title, message, links}) => {
      this.modalTitle = title;
      this.modalMessage = message || '';
      this.modalLinks = links || [];
      this.isVisible = true;
    });
  }

  closeModal() {
    this.isVisible = false;
  }
}
