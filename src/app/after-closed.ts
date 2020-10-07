import {ComponentRef} from '@angular/core';

export interface AfterClosed<C, Z> {
  modalRef: ComponentRef<C>;

  afterClosed(): Z;
}
