import { Component, OnInit } from '@angular/core';
import {Proyecto} from '../modelos/proyecto';

import { ProyectosService } from '../servicios/proyectos.service';

import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
	selector: 'addtarea',
	templateUrl: './addproyecto.component.html'
})
export class AddProyectoComponent implements OnInit {
	form: FormGroup;

	_nuevoProyecto:Proyecto=new Proyecto();

	constructor(private _proyectosService:ProyectosService, private _router: Router) { }

	ngOnInit() {
		
	}

	onSubmit(form: NgForm) {
		console.log('Formulario:',form);
		if (!form.valid) {
			return;
		}else{
			this._proyectosService.addProyecto(this._nuevoProyecto).subscribe(
				(isOk:boolean) => {
					if(isOk) this._router.navigate(['proyectos']);
				}
			);
		}
	}

}
