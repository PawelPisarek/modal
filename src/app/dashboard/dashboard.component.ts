import {Component, OnInit} from '@angular/core';
import {ModalService} from '../modal.service';
import {LoginModalComponent} from '../login-modal/login-modal.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private modalService: ModalService<any, any, Observable<boolean>>) {
  }

  ngOnInit(): void {

  }

  login(loginForm: { username: string }): void {
    const componentRef = this.modalService.open({component: LoginModalComponent});
    console.log(componentRef);
    // setTimeout(() => {
    componentRef.afterClosed().subscribe(asd => {
      console.log(asd);
    });
    // });
    console.log(componentRef);
  }
}
