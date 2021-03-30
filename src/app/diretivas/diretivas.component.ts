import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  cursos: string[] = ["Angular 2","Java","Ruby","Python"]

  constructor() { }

  ngOnInit(): void {
  }

}
