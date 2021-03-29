import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {
  //Injetando o nome da variável que vai receber o valor como propriedade
  // de outro módule
  @Input('nome') nomeCurso: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
