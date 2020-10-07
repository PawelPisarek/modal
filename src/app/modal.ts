import {Type} from '@angular/core';

export interface Modal<T, V> {
  component: Type<T>;
  value: V;
}
