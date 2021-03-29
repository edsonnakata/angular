import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  nome: string = "abcde"

  pessoa: any={
    nome:"blablabla",
    idade: 20,
    endereco: {
      rua: "rua tal",
      numero: "4321-B"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
