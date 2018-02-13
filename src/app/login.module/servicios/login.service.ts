import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Usuario } from '../modelos/user';

@Injectable()
export class LoginService{
	_isAuth:boolean=false;

	login(user:Usuario){
		// Conectamos con API
		this._isAuth=true;
		return Observable.of(this._isAuth);
	}

	isAuthenticated():boolean{
		return this._isAuth;
	}
}