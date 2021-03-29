import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  nomeDoCurso: string = 'Angular'

  onMudouValor(evento){
    console.log(evento.novoValor)
  }

  valorInicial: number = 25

  constructor() { }

  ngOnInit(): void {
  }

}
