import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateaNumeros'
})
export class FormateaNumerosPipe implements PipeTransform {

  transform(value: number) {
    return "USD" +  new Intl.NumberFormat().format(value);

  }

}
