import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://enaka.com'

  getValor(){
    return 1
  }

  expressao: boolean = true

  getTrue(){
    return true
  }

  urlImagem = 'https://cdn.pixabay.com/photo/2020/08/07/13/16/plant-5470631_960_720.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
