import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  value: { username: string };
  destroyCallback: (value?) => void;

  constructor() {
  }

  ngOnInit(): void {
  }

  close(decision: boolean): void {
    this.destroyCallback(decision);
  }
}
