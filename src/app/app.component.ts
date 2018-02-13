import { Component } from '@angular/core';

import{LoginService} from './login.module/servicios/login.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	constructor(private _loginService:LoginService, private _router: Router){
		if(!this._loginService.isAuthenticated()) this._router.navigate(['/login']);
	}
}
