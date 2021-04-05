import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  //Colocando injeção de dependência
  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer2) {
    // Uma boa prática é não utilizar esse formato pois é vulnerável a ataques do tipo XSS
    // this._elementRef.nativeElement.style.backgroundColor = "yellow"
    // Pra isso é recomendado a utilização do Renderer
    this._renderer.setStyle(_elementRef.nativeElement, 
      'background-color', 'yellow')
   }

}
