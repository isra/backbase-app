import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateMonthYeaer'
})
export class DateMonthYeaerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
