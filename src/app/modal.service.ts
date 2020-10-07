import {ComponentFactoryResolver, ComponentRef, Injectable} from '@angular/core';
import {Modal} from './modal';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ModalRef} from './modal-ref';
import {take} from 'rxjs/operators';
import {AfterClosed} from './after-closed';

@Injectable({
  providedIn: 'root'
})
export class ModalService<T, C, Z> {

  modals$: Subject<ModalRef<T, C, Z>> = new Subject();

  constructor() {
  }

  open(adItem: Modal<T>): AfterClosed<C, Z> {
    const modal = new Subject<AfterClosed<C, Z>>();
    let modalRef = null;
    modal.pipe(take(1)).subscribe(modalReference => {
      console.log(modalReference);
      modalRef = modalReference;
    });
    console.log(modalRef);

    this.modals$.next({modal: adItem, modalRefs$: modal});


    return modalRef;
  }
}
