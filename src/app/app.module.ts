import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModalWrapperComponent } from './modal-wrapper/modal-wrapper.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginModalComponent,
    LoginFormComponent,
    ModalWrapperComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
