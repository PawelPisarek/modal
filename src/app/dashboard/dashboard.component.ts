import {ApplicationRef, ChangeDetectionStrategy, Component} from '@angular/core';
import {ModalService} from '../modal.service';
import {LoginModalComponent} from '../login-modal/login-modal.component';
import {BehaviorSubject, Observable, timer} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private modalService: ModalService<LoginModalComponent, LoginModalComponent, Observable<boolean>, { username: string }>) {
  }

  saveFromHandler(loginForm: { username: string }): void {
    const componentRef = this.modalService.open({component: LoginModalComponent, value: loginForm});
    componentRef.afterClosed().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        alert('zalogowano');
      }
    });
    componentRef.modalRef.changeDetectorRef.detectChanges();
  }
}
