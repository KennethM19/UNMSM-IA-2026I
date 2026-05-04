import {Component, Input} from '@angular/core';
import {ModalService, LinkItem} from '../../services/ModalService/modal-service';


@Component({
  selector: 'app-tab-panel',
  imports: [],
  templateUrl: './tab-panel.html',
  styleUrl: './tab-panel.css',
  standalone: true
})
export class TabPanel {
  @Input() title!: string;
  @Input() points: string[] = [];
  @Input() summary!: string;

  @Input() resourceLink: string | LinkItem[] = '';
  @Input() labLink: string | LinkItem[] = '';
  @Input() workLink: string | LinkItem[] = '';

  constructor(private modalService: ModalService) {}

  openLink(link: string | LinkItem[], title: string) {
    if (Array.isArray(link)) {
      if (link.length === 1) {
        window.open(link[0].url, '_blank');
      } else if (link.length > 1) {
        this.modalService.openModal(title, '', link);
      } else {
        this.modalService.openModal(title, `${title} no disponible`);
      }
    } else {
      if (!link || typeof link !== 'string' || link.trim() === '') {
        this.modalService.openModal(title, `${title} no disponible`);
      } else {
        window.open(link, '_blank');
      }
    }
  }
}
