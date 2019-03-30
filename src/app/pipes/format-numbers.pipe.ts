import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumbers'
})
export class FormatNumbersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? parseFloat(value).toFixed(2) : value;
  }

}
