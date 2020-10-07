import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  value: { username: string };
  destroyCallback: (value?) => void;
  close(decision: boolean): void {
    this.destroyCallback(decision);
  }
}
