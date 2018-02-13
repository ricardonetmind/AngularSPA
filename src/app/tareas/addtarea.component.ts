import { Component, OnInit } from '@angular/core';
import {Proyecto} from '../modelos/proyecto';
import {Tarea} from '../modelos/tarea';

import { ProyectosService } from '../servicios/proyectos.service';
import { TareasService } from '../servicios/tareas.service';

import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
	selector: 'addtarea',
	templateUrl: './addtarea.component.html',
 	styleUrls: ['./addtarea.component.css']
})
export class AddTareaComponent implements OnInit {
	form: FormGroup;
	proyectos:Proyecto[];

	_nuevaTarea:Tarea=new Tarea();

	constructor(private _proyectosService:ProyectosService,private _tareasService:TareasService,private _router: Router) { }

	ngOnInit() {
		this._proyectosService.getProyectosFromApiStore().subscribe(
			(proyectosfromapi:Proyecto[]) => {
				console.log('proyectosfromapi',proyectosfromapi);
				this.proyectos = proyectosfromapi;
			}
		);
	}

	onSubmit(form: NgForm) {
		console.log('Formulario:',form);
		if (!form.valid) {
			return;
		}else{
			this._tareasService.addTarea(this._nuevaTarea).subscribe(
				(isOk:boolean) => {
					if(isOk) this._router.navigate(['tareas']);
				}
			);
		}
	}

}
