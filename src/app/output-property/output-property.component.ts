import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;

  // É um emissor de eventos para o componente pai poder ouvir as alterações
  @Output() mudouValor = new EventEmitter();

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor}) //o método emit pode passar qualquer coisa, até mesmo um objeto
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }
  constructor() { }

  ngOnInit(): void {
  }

}
