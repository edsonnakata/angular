import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnInit {

  @Input() valorInicial: number = 15

  constructor() { 
    this.log('constructor')
  }

  ngOnChanges(){
    this.log('ngOnChanges')
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked')
  }

  ngAfterViewInit(){
    this.log('ngAfterViewInit')
  }

  ngOnDestroy(){
    this.log('ngOnDestroy')
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked')
  }

  ngOnInit(){
    this.log('ngOnInit')
  }

  ngDoCheck(){
    this.log('ngDoCheck')
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit')
  }

  private log(hook: string){
    console.log(hook);
  }

}
