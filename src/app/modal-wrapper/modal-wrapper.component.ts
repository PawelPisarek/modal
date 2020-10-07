import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalService} from '../modal.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.scss']
})
export class ModalWrapperComponent implements OnInit {

  @ViewChild('dynamicComponentContainer', {read: ViewContainerRef}) dynamicComponentContainer;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private modalService: ModalService<any, any, any>) { }

  ngOnInit(): void {
    this.modalService.modals$.subscribe(modal => {
      console.log(modal);
      const factory = this.componentFactoryResolver.resolveComponentFactory(modal.modal.component);
      const componentRef = this.dynamicComponentContainer.createComponent(factory);
      componentRef.changeDetectorRef.detectChanges();
      const afterClose = new Subject();
      console.log(modal);
      // componentRef.instance.value = modal.modal.value;
      componentRef.instance.destroyCallback = (value?) => { componentRef.destroy(); afterClose.next(value); };
      console.log('aaaaa');
      modal.modalRefs$.next({modalRef: componentRef, afterClosed: () => afterClose});
    });
  }

}
