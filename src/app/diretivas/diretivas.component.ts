import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  cursos: string[] = ["Angular 2"]

  mostrarCursos:boolean = false;

  aba: string = 'home'

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos
  }

  constructor() { }

  ngOnInit(): void {
  }

}
