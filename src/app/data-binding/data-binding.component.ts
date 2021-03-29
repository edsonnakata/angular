import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://enaka.com'
  textoSalvo: string = ""

  onMouse: boolean = false;

  getValor(){
    return 1
  }

  expressao: boolean = true

  valorAtual: string = ""

  getTrue(){
    return true
  }

  botaoClicado(){alert("Botão foi clicado!!")}

  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value)
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvaTexto(valor){
    this.textoSalvo = valor
  }
  onMouseOverOut(){
    this.onMouse = !this.onMouse
  }

  urlImagem = 'https://cdn.pixabay.com/photo/2020/08/07/13/16/plant-5470631_960_720.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
