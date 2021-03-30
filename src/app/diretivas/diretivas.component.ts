import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  meuFavorito: boolean = false

  onClick(){
    this.meuFavorito = !this.meuFavorito
  }

  constructor() { }

  ngOnInit(): void {
  }

}
