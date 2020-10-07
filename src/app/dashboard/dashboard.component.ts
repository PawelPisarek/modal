import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ModalService} from '../modal.service';
import {LoginModalComponent} from '../login-modal/login-modal.component';
import {Observable, timer} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private modalService: ModalService<LoginModalComponent, LoginModalComponent, Observable<boolean>, { username: string }>) {
  }

  login(loginForm: { username: string }): void {
    const componentRef = this.modalService.open({component: LoginModalComponent, value: loginForm});
    // setTimeout(()=>{
    timer(1,100).pipe(tap(aasd=>{
      console.log(aasd);
      componentRef.modalRef.changeDetectorRef.detectChanges();
    }))
    // },1);
    componentRef.afterClosed().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        alert('zalogowano');
      }
    });
  }
}
