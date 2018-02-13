import { NgModule,ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule }    from '@angular/forms';

import { LoginService } from './servicios/login.service';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule, FormsModule
    ],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [ LoginService ]
})
export class LoginModule {
   static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoginModule,
      providers: [LoginService]
    }
  }
}