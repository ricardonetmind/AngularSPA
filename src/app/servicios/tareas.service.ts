import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {  HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Tarea } from '../modelos/tarea';

@Injectable()
export class TareasService {
	private _tareas:Tarea[];
	private _api="http://www.mocky.io/v2/5a2bf6862f0000281103932b";
	private _observable: Observable<any>;
	
	constructor(private _http: HttpClient){
	}

	getTareas(){
		return this._tareas;
	}

	getTareaById(tid:number):Tarea{
		return (this._tareas.filter(tarea => tarea.tid == tid)[0]);
	}

	borrarTareaById(tid: number): void {
		console.log('Borrar tid de la lista:',tid);
		for (var i = 0; i < this._tareas.length; ++i) {
			if(this._tareas[i].tid == tid ) this._tareas.splice(i,1);
		}
	}

	getTareasFromApi(){
		return this._http.get<Tarea[]>(this._api)
		.map((tareasfromapi: Tarea[]) => {
			this._tareas=tareasfromapi; 
			return this._tareas;
		})
		.do((tareas: Tarea[]) => {
			console.log('getTareas...',this._tareas );
		})
		.catch(this.handleError);

	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json() || 'Server error');
	}

	addTarea(newtarea:Tarea){
		newtarea.tid=(new Date().getTime());
		this._tareas.push(newtarea);
		return Observable.of(true);

		/*let body = JSON.stringify(newtarea);
		let headers = new HttpHeaders();
    	headers.append('Content-Type', 'application/json');

		console.log('Enviando Api...');
		return this._http.post<Tarea[]>('api/tareas.json',body,{ headers: headers })
		.map((tareasfromapi: Tarea[]) => {
			this._tareas=tareasfromapi; 
			return true;
		})
		.catch(this.handleError);*/
	}

	getTareasFromApiStore() {
		if(this._tareas) {
			// if `data` is available just return it as `Observable`
			console.log('data is available ...');
			return Observable.of(this._tareas);
		} else if(this._observable) {
			// if `this.observable` is set then the request is in progress return the `Observable` for the ongoing request
			console.log('observable is set, request in progress ...');
			return this._observable;
		} else {
			// create the request, store the `Observable` for subsequent subscribers
			console.log('no data, set request and update observable ...');
			this._observable = this.getTareasFromApi().share();
			return this._observable;
		}
	}

}
