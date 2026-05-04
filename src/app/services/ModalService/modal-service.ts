import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

export interface LinkItem {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalTrigger = new Subject<{title: string, message?: string, links?: LinkItem[]}>();
  modalTrigger$ = this.modalTrigger.asObservable();

  openModal(title: string, message?: string, links?: LinkItem[]) {
    this.modalTrigger.next({title, message, links});
    if (!links) {
        console.log("no available")
    }
  }
}
