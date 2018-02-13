import { Component,NgModule } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Usuario } from '../modelos/user';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html'
})
export class LoginComponent{

	user:Usuario=new Usuario();

	constructor(private _loginService:LoginService, private _router: Router){
		
	}

	onSubmit(form: NgForm) {
		console.log('Formulario:',form);
		if (!form.valid) {
			return;
		}else{
			this._loginService.login(this.user).subscribe(
				(isOk:boolean) => {
					if(isOk) this._router.navigate(['/']);
				}
			);
		}
	}
}