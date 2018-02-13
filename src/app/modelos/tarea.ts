export class Tarea {

	tid:number;
	descripcion:string;
	tiempo:number;
	proyecto:number;

	constructor (tid?:number,descripcion?:string,tiempo?:number,proyecto?:number){
		this.tid=tid;
		this.descripcion=descripcion;
		this.tiempo=tiempo;
		this.proyecto=proyecto;
	}
}
