import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})
export class MeuFormComponent implements OnInit {


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
