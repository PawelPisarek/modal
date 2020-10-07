import {Modal} from './modal';
import {Subject} from 'rxjs';
import {AfterClosed} from './after-closed';

export interface ModalRef<T, C, Z> {
  modal: Modal<T>;
  modalRefs$: Subject<AfterClosed<C, Z>>;
}
