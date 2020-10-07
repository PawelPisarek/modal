import {ChangeDetectionStrategy, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalService} from '../modal.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./modal-wrapper.component.scss']
})
export class ModalWrapperComponent implements OnInit {

  @ViewChild('dynamicComponentContainer', {read: ViewContainerRef}) dynamicComponentContainer;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private modalService: ModalService<any, any, any, any>) { }

  ngOnInit(): void {
    this.modalService.modals$.subscribe(modal => {
      const factory = this.componentFactoryResolver.resolveComponentFactory(modal.modal.component);
      const componentRef = this.dynamicComponentContainer.createComponent(factory);
      componentRef.changeDetectorRef.detectChanges();
      const afterClose = new Subject();
      componentRef.instance.destroyCallback = (value?) => { componentRef.destroy(); afterClose.next(value); };
      componentRef.instance.value = modal.modal.value;
      modal.modalRefs$.next({modalRef: componentRef, afterClosed: () => afterClose});
      componentRef.changeDetectorRef.detectChanges();
    });
  }

}
