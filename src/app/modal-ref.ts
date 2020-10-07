import {Modal} from './modal';
import {Subject} from 'rxjs';
import {AfterClosed} from './after-closed';

export interface ModalRef<T, C, Z, V> {
  modal: Modal<T, V>;
  modalRefs$: Subject<AfterClosed<C, Z>>;
}
