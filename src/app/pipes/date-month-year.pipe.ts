import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateMonthYear'
})
export class DateMonthYearPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const date = new Date(+value);
    const month = this.getMonthShowName(date.getMonth());
    const year = date.getFullYear().toString().substr(-2);
    return `${month}. ${year}`;
  }

  private getMonthShowName(month: number): string {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    return months[month];
  }

}
